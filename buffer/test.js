/**
 *      性能测试代码
 *          ab -c 200 -t 100 http://192.168.45.95:8001/
 *              
 * 
 * 
**/
const http = require('http');
let helloWord = '';

for(let i = 0; i < 1024 * 10; i++){
    helloWord += 'a'
};

// helloWord = Buffer.from(helloWord)

http.createServer((req, res) => {
    res.writeHead(200)
    res.end(helloWord)
}).listen(8001)