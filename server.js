const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Hello Node.js! on 3000")
});

// 익스프레스 라우팅은 미친듯
app.get('/pet', (request, response)=>{
    response.send("펫 용품을 쇼핑할 수 있는 페이지입니다.")
});

// 홈페이지
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
});