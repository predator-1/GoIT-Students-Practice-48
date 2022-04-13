// fix link (includes my-site)

let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

link = !link.endsWith('/') && link.includes('my-site') ? link + '/' : link;

console.log(link);
