const path =require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('------------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname:()', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string,path.extname(string)));
console.log('-------------------------------------');
console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({
    dir : '/home/bgh/workspace/nodejs',
    name : 'path',
    ext :'.js',
}));

console.log('path.normalize():', path.normalize('/home/bgh/workspace/nodejs/path.js'));
console.log('---------------------------------------------------------------');
console.log('path.isAbsolute():' , path.isAbsolute('/'));
console.log('path.isAbsolute():' , path.isAbsolute('./home') );
console.log('----------------------------------------------------------------');
console.log('path.relative():' , path.relative('/home/bgh/workspace/nodejs/path.js','/'));
console.log('path.join():' , path.join(__dirname,'..','..','/home','.','workspace','.','nodejs'));
console.log('path.relative():' , path.relative(__dirname,'..','..','/home','.','workspace','.','nodejs'));