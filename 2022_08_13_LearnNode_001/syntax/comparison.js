let args = process.argv;
console.log(args[2])

/* 
[
  '/usr/local/bin/node',
  '/Users/kimsanghyun/Desktop/True_Main_Backgound/0000_Project_file/2022_08_13_LearnNode_001/syntax/comparison.js'
]
array의 첫번째 값은 node.js의 위치이다. 두번째 값은 현재 실행하는 파일 위치를 알려준다.
*/

console.log('A')
console.log('B')

if(args[2] === '1'){
    console.log('C1');
} else {
    console.log('c2');
}
console.log('D')