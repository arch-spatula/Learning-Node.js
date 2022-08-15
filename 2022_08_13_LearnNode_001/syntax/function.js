// 중복이 발생하면 유지보수하기 나쁘고 에러가 발생하기 쉽다.
// 함수란 프로그램 일부에 이름을 붙이는 것과 같다.

function foo(){
    console.log(1)
    console.log(2)
    console.log(3)
}

function bar() {
    foo()
    foo()
    foo()
}
bar()