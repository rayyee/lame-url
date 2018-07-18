"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var __startsWith = function __startsWith(str, searchString, position) {
    position = position || 0;
    return str.substr(position, searchString.length) === searchString;
};

function parse(url) {
    url = (url || "").trim();

    var output = {
        port: null,
        resource: "",
        pathname: "",
        hash: "",
        search: "",
        href: url,
        query: ""
    };

    var protocolIndex = url.indexOf("://");

    var parts = null,
        splits = null;

    if (__startsWith(url, ".")) {
        if (__startsWith(url, "./")) {
            url = url.substring(2);
        }
        output.pathname = url;
        // output.protocol = "file";
    }

    if (protocolIndex !== -1) {
        url = url.substring(protocolIndex + 3);
    }

    parts = url.split("/");
    output.resource = parts.shift();

    // domain.com:port
    splits = output.resource.split(":");
    if (splits.length === 2) {
        output.resource = splits[0];
        output.port = Number(splits[1]);
        if (isNaN(output.port)) {
            output.port = null;
            parts.unshift(splits[1]);
        }
    }

    // Remove empty elements
    parts = parts.filter(Boolean);

    // Stringify the pathname
    output.pathname = output.pathname || (output.href[0] === "/" ? "/" : "") + parts.join("/");

    // #some-hash
    splits = output.pathname.split("#");
    if (splits.length === 2) {
        output.pathname = splits[0];
        output.hash = splits[1];
    }

    // ?foo=bar
    splits = output.pathname.split("?");
    if (splits.length === 2) {
        output.pathname = splits[0];
        output.query = output.search = splits[1];
    }

    return output;
}

function stringify(url) {}

exports.parse = parse;
exports.stringify = stringify;