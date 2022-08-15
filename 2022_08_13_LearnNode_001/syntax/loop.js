// 반복문은 여러 종류가 있다. for, while, forEach가 있다.

// 대부분의 경우 의도하지 않은 무한 루프는 버그이다. 컴퓨터의 리소스를 엄청 낭비한다.
let i = 0;
while(i < 10) {
    console.log(i)
    i += 1
}