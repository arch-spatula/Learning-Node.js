// 아래 배열을 총합을 알고싶다는 문제가 있다. 그리고 매서드를 사용할 수 없는 환경이라면 반복문으로 모두 더해볼 수 있다. 
let number = [1, 400, 12, 34, 5];
let total = 0;

let i = 0;
while(i < number.length){
    total += number[i];
    i += 1;
}
console.log(total);