const url = require('url');

const URL = url.URL;
const myURL = new URL('https://gilbut.co.kr/boo/bookList.aspx?secate1=001001000#anchor');
console.log('new URL() : ', myURL);
console.log('url.format():', url.format(myURL));
console.log('-----------------------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/boo/booList.aspx?secate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));