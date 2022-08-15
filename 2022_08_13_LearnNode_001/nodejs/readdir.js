// 파일목록을 알아내는 방법
let testFolder = './data/';
let fs = require('fs');

fs.readdir(testFolder, (err, fileList) => {
    console.log(fileList);  // [ 'CSS', 'HTML', 'JavaScript' ]
})