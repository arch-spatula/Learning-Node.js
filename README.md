# Learning-Node.js
이런 저런 Node.js 튜토리얼을 정리할 것입니다.  
아래 노션링크에서 배운 것을 정리하고 있습니다. 참고로 현재 노션링크는 의도적으로 비공개처리했습니다. 저 혼자 사용하고 있습니다. 
https://www.notion.so/Node-js-db3d4e2c19234c62a0df6739218beed7

# 생활코딩 Node.js
생활코딩 Node.js 튜토리얼을 정리했습니다.  
https://opentutorials.org/course/3332  

[개인 노션페이지](https://www.notion.so/a0120bc8879247508d5a137a41c17c33)

Node.js 튜토리얼을 따라면서 버그가 발생했다. 하지만 버그를 해결할 실력 부족으로 재수강하도록 한다.  
버그 발생지점은 33강이다. 하지만 맥락상 30강을 기준점으로 수강하도록 한다.  
재수강할 때는 git push도 하면서 매일 진전과정을 공유하도록 한다.  

## Node.js란 무엇인가?

간단하세 자바스크립트 런타임(실행환경)입니다. 주로 자바스크립트를 

## Node.js 설치





# 생활코딩 Express.js

https://opentutorials.org/module/3590

https://www.youtube.com/watch?v=hwknmhLKgYg

프레임워크는 생각을 단순화 시키기 위해서 사용합니다.

https://expressjs.com/ko/


https://opentutorials.org/module/3590/21387

## 시작하기

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
Express로 엄청나게 코드가 간략해졌습니다. 동일한 문제를 express 없으면 아래와 같은 코드가 됩니다.

```js
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response){
    var url = request.url;
    if (request.url == '/') url = '/index.html';
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
```

`fs`, `http` 2개의 모듈을 의존합니다. 그리고 `app`객체를 만들기 위해 `http`의 `createServer` 메서드를 사용해야 합니다. `response`의 통신 상태도 정의해줘야 합니다. 그리고 `end`메서드도 `fs`모듈을 활용해야 합니다.



# 유데미 강좌

# 애플코딩 Node.js  

유튜브 재생목록  
https://www.youtube.com/playlist?list=PLfLgtT94nNq1qmsvIii_CAxFlD7tvB5NE
애플코딩 강의 주소  
https://codingapple.com/course/node-express-mongodb-server/

무료까지 모두 수강했습니다. 무료 범위 내에서 재미있게 잘 가르치십니다.
