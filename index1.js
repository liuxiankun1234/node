

/**
 *	创建了一个本地服务 同fis3做的事情一样
 *
 *		npm install -g httperver
 *	
 *	洋葱模型
 *	调用栈
**/
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer((request, response) => {
	const urlPase = url.parse(request.url)
	const query = querystring.parse(urlPase.query)

	if(urlPase.pathname === '/favicon.ico'){
		response.writeHead(200);
		response.end();
		return;
	}

	if(urlPase.pathname === '/'){
		// const filePath = path.join(__dirname, request.url); // 拼接当前脚本文件地址
		// const stat = fs.statSync(filePath); // 获取当前脚本状态
		// const mtime = stat.mtime.toGMTString() // 文件的最后修改时间
		// const requestMtime = request.headers['if-modified-since']; // 来自浏览器传递的值
		
		// console.log(stat);
		// console.log(mtime, requestMtime);

		
		// response.setHeader('Last-Modified', mtime)

        response.writeHead(200, {
            'Content-Type': 'text/html'
        })

		console.log('end--------------------->')
		response.end(
            fs.readFileSync(__dirname + '/html/loaded_test.html')
        );
	}

    if(urlPase.pathname === '/css/index.css') {
        response.writeHead(200, {
            'Content-Type': 'text/css'
        })
        setTimeout(() => {
            response.end(
                fs.readFileSync(__dirname + '/css/index.css')
            );
        }, 7000)
    }


    if(urlPase.pathname === '/js/index.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        })

        setTimeout(() => {
            response.end(
                fs.readFileSync(__dirname + '/js/index.js')
            );
        }, 5000)
    }
}).listen(3001);