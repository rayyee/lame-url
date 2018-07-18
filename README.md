<p align="center">⚠️🦆 lame-url</p>

> The library has url parse and stringify function.    
⚠️⚠️⚠️ it is lameduck, because of that **no query object** **no protocol** **no authentication**.    
but it is nano-scaled.

### TODOs
- [x] parse function
- [ ] stringify function
- [ ] more test

### Usage

```javascript
const url = parse( "http://www.example.com/foo/bar?_sort=asc" );

console.log(url);
{
    port: null,
    resource: "www.example.com",
    pathname: "foo/bar",
    hash: "",
    search: "_sort=asc",
    href: "http://www.example.com/foo/bar?_sort=asc",
    query: "_sort=asc"
}
```


### Related repos
- [parse-path](https://github.com/IonicaBizau/parse-path) *if you need unbroken url, plz use this.*
- [url-parse](https://github.com/unshiftio/url-parse)
- [URI.js](https://github.com/medialize/URI.js) *more functions to mutate url*
- [domurl](https://github.com/Mikhus/domurl)
- [mini-url](https://github.com/DylanPiercey/mini-url)
- [min-url](https://github.com/chunpu/min-url)

### License
[MIT License](https://opensource.org/licenses/MIT)
