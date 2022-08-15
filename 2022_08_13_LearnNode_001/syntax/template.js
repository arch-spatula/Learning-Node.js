// 리터럴이란 정보를 표현하는 기호를 의미한다. 일반적인 상수, 문자열의 내용을 의미할 수 있다.
// 코드를 탬플릿으로 바꾸기 위해서는 그래고 액센트(``)를 활용해야 한다. 템플릿의 시작과 끝을 알려준다. 
// 중간에 따옴표처럼 문자열을 간섭하면 백슬래시(\)를 활용해야 한다.
// ${변수명}을 활용해 내용을 변수로 제어할 수 있다. 
let name = "k8805";
let letter = `Dear  ${name} \n
Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n ${name} Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ${name} PageMaker including versions of Lorem Ipsum.`
console.log(letter);