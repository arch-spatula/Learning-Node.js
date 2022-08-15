let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    

    // 정상적으로 서버가 제공하는 경우
    if(pathname === '/'){
        if(queryData.id === undefined){  // 홈 url을 정의하는 방법이다. 뒤에 아무것도 안 붙기 때문에 하는 정의이다.

            fs.readdir('./data', (error, fileList)=>{
                let title = "Welcome";
                let description = "Hello, Node.js";
                let list = '<ul>';
                let i = 0;
                while(i < fileList.length){
                    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
                    i += 1
                }
                list += '</ul>';

                let template = `
                <!doctype html>
                <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    ${list}
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body> 
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            })
            
        } else {
            fs.readdir('./data', (error, fileList) => {
                let list = '<ul>';
                let i = 0;
                while(i < fileList.length){
                    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
                    i += 1;
                }
                list += '</ul>';
                
                fs.readFile(`data/${queryData.id}`, 'utf8', (err, description)=>{
                    let title = queryData.id;
                    let template = `
                    <!doctype html>
                    <html>
                    <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1><a href="/">WEB</a></h1>
                        ${list}
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </body> 
                    </html>
                    `;
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else {
        // 없는 파일을 요청한 경우
        response.writeHead(404);
        response.end("Not found")
    }
});
app.listen(3000);

 