// fs는 Node.js가 제공하는 모듈이다.
let fs = require('fs');
fs.readFile('/Users/kimsanghyun/Desktop/True_Main_Backgound/0000_Project_file/2022_08_13_LearnNode_001/nodejs/sample.txt', 'utf8', (err, data) => {
    console.log(data);
})