import test from 'ava';
import { stringify, parse } from '../dist';

test.before( t =>
    t.context = {
        url: parse( `http://www.example.com/foo/bar?_sort=asc` ),
        url2: parse( `example.com/foo/bar?_sort=asc` ),
        url3: parse( `./foo/bar?_sort=asc` )
    }
);

test( 'test url pathname', t =>
    t.is( t.context.url.pathname, 'foo/bar' )
);

test( 'test url resource', t =>
    t.is( t.context.url.resource, 'www.example.com' )
);

test( 'test url query', t =>
    t.is( t.context.url.query, '_sort=asc' )
);

test( 'test no protocol url pathname', t =>
    t.is( t.context.url2.pathname, 'foo/bar' )
);

test( 'test no protocol url resource', t =>
    t.is( t.context.url2.resource, 'example.com' )
);

test( 'test relative url pathname', t =>
    t.is( t.context.url3.pathname, 'foo/bar' )
);
