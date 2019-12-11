/**
 *  理解Buffer
 * 
 *  为什么会有Buffer这种东西
 *      在node中，需要处理网络协议 数据库操作 处理图片 接收上传文件 在网络流和文件的操作中 还要处理大量二进制数据 
 *      JS自有的字符串远远不能满足这些需求 于是Buffer应运而生
 * 
 *  Buffer结构 
 *      用于操作字节
 * 
 *  注意：
 *      Buffer类在全局作用域中 因此无需使用require('buffer')
 * 
 * 
 * 
**/
const buffer1 = Buffer.from('liuxiankun')
const buffer2 = Buffer.from([1,2,3,4])

const buffer3 = Buffer.alloc(20)

console.log(buffer1)
console.log(buffer2)
console.log(buffer3)
console.log(global)
