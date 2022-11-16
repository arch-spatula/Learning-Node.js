# Next.js

[NestJS로 배우는 백엔드 프로그래밍](https://wikidocs.net/book/7059)

# Learning-Node.js

이런 저런 Node.js 튜토리얼을 정리할 것입니다.  
아래 노션링크에서 배운 것을 정리하고 있습니다. 참고로 현재 노션링크는 의도적으로 비공개처리했습니다. 저 혼자 사용하고 있습니다.
https://www.notion.so/Node-js-db3d4e2c19234c62a0df6739218beed7

# 유데미 The Complete 2022 Web Development Bootcamp

시작하기 전에 서버라는 개념은 음식점에 비유하면 직관적으로 이해할 수 있습니다. 음식점에서 식당은 클라이언트인 손님이 오고 식사하는 곳입니다. 주방은 클라이언트의 요청한 음식(페이지)를 제공합니다. 그리고 주방은 창고(데이터베이스)에서 재료를 가져와 조리를 하고 클라이언트에게 제공합니다. 물론 모든 요리(처리)가 주방에서 되는 것은 아닙니다. 디너쇼를 위해 클라이언트 측에서 처리할 때도 많이 있습니다.

## Node.js

Read Evaluation Print Loops란 읽고 판단하고 출력하는 반복문을 의미합니다.

터미널에 `node`라고 입력하면 자바스크립트를 작성할 수 있습니다. 터미널을 탈출하고 싶으면 `^C`이라고 작성합니다.

node.js를 작성하면 다양한 라이브러리를 같이 포함합니다. 공식문서를 확인하기 바랍니다.

라이브러리를 불러오기 위해서는 옛날 강의는 `require`로 호출합니다.

```js
const fs = require("fs");
```

```js
import { unlink } from "node:fs";
```

요즘은 이렇게 합니다.

```js
// file1.txt을 file2.txt으로 복제합니다.
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");
```

하지만 사용이 어려워서 이렇게했습니다.

이렇게 불러온 모듈들을 보고 Native 모듈이라고 부릅니다.

`npm`은 유용한 패키지를 몇개 설치해서 바퀴를 다시 만들 필요가 없게 해줍니다. 물론 이것은 남이 만들어준 바퀴를 공유해주고 있다는 전제입니다.

```shell
npm init
```

이렇게 터미널에 명령하면 설치마법사 같은 피드백을 줍니다.

```shell
npm init -y
```

이 명령으로 설치마법사 같은 것을 건너 뛸 수 있습니다. 여기까지는 `npm` 개발환경 초기화합니다. 이제 설치를 시작할 수 있습니다.

```json
{
  "name": "2022_11_03_the_complete_2022_web_development_bootcamp_001",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

`package.json`은 이 상태가 됩니다.

```shell
npm install superheroes
```

슈퍼히어로 이름 생성기입니다. 이 명령을 하면 패키지에 의존성이 추가됩니다.

```json
{
  "name": "2022_11_03_the_complete_2022_web_development_bootcamp_001",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "superheroes": "^3.0.0"
  }
}
```

`dependencies`가 추가된 것을 확인할 수 있습니다.

## Express

`Express`는 프레임워크입니다. node.js는 로우레벨로 접근할 수 있습니다. `node.js`의 범위는 넓습니다. `node.js`는 `general purpose`입니다. 중복이 많고 수동으로 작성해줘야 하는 것이 많습니다.

`Express`는 웹 앱을 위한 프레임워크입니다. 중복을 피할 수 있게 해주는 프레임워크입니다.

관례적으로 `app`은 express 같은 백엔드 모듈을 의미하는 경우가 많습니다.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

`app.listen` 메서드의 2번째 인자는 콜백함수입니다. 콜백함수로 서버가 동작하면서 터미널에 피드백을 주게 할 수 있습니다.

```shell
node server.js
```

`naver.com`은 도메인입니다. 우리가 개인 프로젝트로 서버를 만들 때는 `localhost:(포트번호)`가 도메인이 됩니다. 여기 url 뒤에 이런 저런 문자가 붙은 것으로 서버에게 요청을 보내는 것입니다. 간단하게 `/`만 보내면 보내면 보통은 홈페이지에 해당하는 `get` 요청입니다.

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

`get` 메서드는 첫번째는 라우트 이름이고 두번째 인자는 `req`, `res`인자를 갖는 콜백함수입니다. `res`인자에게 `send` 메서드는 응답메서드입니다. 응답은 문자열로도 가능하지만 `html`로도 가능합니다.

```js
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
```

이렇게 하면 `html` 형식으로 응답한 것입니다.

```js
app.get("/about", (req, res) => {
  res.send("<h1>Jake the dog</h1>");
});
```

url로 `localhost:(포트번호)/about`을 보내면 `<h1>Jake the dog</h1>`을 응답으로 돌려줍니다.

`nodemon`을 설치하면 프로젝트에서 서버를 재부팅할 필요없이 변경이 바로 반영된 것을 볼 수 있습니다.

```shell
npm install -g nodemon
```

`nodemon`은 전역으로 설치해줘야 작동할 수 있습니다.

```shell
nodemon (서버파일 이름)
```

### 파일 응답하기

[res.sendFile()](https://expressjs.com/ko/4x/api.html#res.sendFile)

`res.sendFile()`메서드로 응답할 수 있습니다.

```js
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
```

`__dirname` 현재 디랙토리 위치를 알려줍니다. 뒤에 `/`는 홈입니다. 그리고 그 뒤에 파일 이름을 붙여서 응답해줍니다.

`html`에서 데이터를 전달하는 방법이 있습니다.

```html
<form action="/" method="POST">
  <input type="text" placeholder="첫번째 숫자" name="num1" />
  <input type="text" placeholder="두번째 숫자" name="num2" />
  <button>더하기</button>
</form>
```

여기서 `form`의 `action` 어트리뷰트를 보면 `/`라우트로 요청을 보냅니다. `method` 어트리뷰트를 보면 요청 유형을 볼 수 있습니다.

`action="/"`은 홈페이지에서만 처리하면 생략해도 됩니다.

`POST`는 서버로 데이터를 보내는 요청입니다.

HTTP return codes cheat sheet입니다.

클라이언트 입장에서입니다.

| code  | 의미          |
| ----- | ------------- |
| 1\*\* | Hold on       |
| 2\*\* | Here you go   |
| 3\*\* | Go away       |
| 4\*\* | You fucked up |
| 5\*\* | I fucked up   |

POST로 들어오는 정보는 `body parser`도 설치하면 처리가 쉬워집니다. `npm install body-parser`으로 설치하도록 합니다.

```js
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
```

## API

API란 무엇인가? 극단적으로 단순하게는 주고 받는 데이터입니다.

넓은 의미는 명령, 함수, 절차, 객체로 외부 시스템을 제어할 수 있는 것들입니다.

API는 직관적인 의미로 계약으로 비유합니다. 데이터 제공자는 올바른 메서드, 프로토콜를 확인하면 클라이언트에게 제공하는 것입니다.

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
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Express로 엄청나게 코드가 간략해졌습니다. 동일한 문제를 express 없으면 아래와 같은 코드가 됩니다.

```js
var http = require("http");
var fs = require("fs");
var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == "/") url = "/index.html";
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
