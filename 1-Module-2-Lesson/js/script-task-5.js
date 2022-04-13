// link fix (endsWith /)

let link = 'https://my-site.com/about/';

if (!link.endsWith('/')) {
  link += '/';
}

console.log(link);
