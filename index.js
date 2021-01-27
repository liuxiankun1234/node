

/**
 *	创建了一个本地服务 同fis3做的事情一样
 *
 *		npm install -g httperver
 *	
 *	洋葱模型
 *	调用栈
**/
console.log(
	typeof exports != "undefined" ,
	 !exports.nodeType
)
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const game = require('./js/game');

http.createServer((request, response) => {
	const urlPase = url.parse(request.url)
	const query = querystring.parse(urlPase.query)

	if(urlPase.pathname === '/favicon.ico'){
		response.writeHead(200);
		response.end();
		return;
	}
	if(urlPase.pathname === '/'){
		// 输出一个网页文本流
		fs.ReadStream(__dirname + '/html/index.html')
		.pipe(response)
	}

	if(urlPase.pathname === '/game'){
		const action = query.action
		const result = game(action);
		console.log()

		if(result === 0) {
			response.writeHead(200);
			response.end('平局');
		}else if(result === 1) {
			response.writeHead(200);
			response.end('你赢了');
		}else{
			response.writeHead(200);
			response.end('你输了');
		}
	}

	if(urlPase.pathname === '/jsonp') {
		const callback = query.callback;
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.end(`${callback}({data: {}, code: 0, msg: 'OK'})`);
		// response.end('你输了');
	}


}).listen(3001);