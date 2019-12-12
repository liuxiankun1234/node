// 模拟客户端
const net = require('net');
const socket = new net.Socket()

socket.connect({
    host: '192.168.3.10',
    port: 3000
})

const lessonids = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

let index = Math.floor( Math.random() * lessonids.length );


function encode(index) {
    buf = Buffer.alloc(8);
    buf.writeInt32LE(lessonids[index])
    return buf
}

socket.write(encode(index));


socket.on('data', (buffer) => {
    console.log(buffer.toString())
})