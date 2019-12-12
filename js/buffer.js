/**
 *  理解Buffer
 * 
 *  为什么会有Buffer这种东西
 *      在node中，需要处理网络协议 数据库操作 处理图片 接收上传文件 在网络流和文件的操作中 还要处理大量二进制数据 
 *      JS自有的字符串远远不能满足这些需求 于是Buffer应运而生
 * 
 *  Buffer结构 
 *      一个像Array的对象 用于操作字节
 * 
 *      模块结构
 *          Buffer是一个典型的JS和C++结合的模块 性能相关由C++实现 非性能相关由JS实现
 *          Buffer所占用的内存不是V8分配的 属于堆外内存 由于V8垃圾回收性能的影响 将常用的操作对象用更高效和专有的内存分配回收策略来管理是个不错的思路
 *          Buffer挂在到全局变量上 无需require('buffer')        
 * 
 *      Buffer对象
 *          类似数组 元素为16进制的两位数 即0~255的数值
 *          
 * 
 *  注意：
 *      Buffer类在全局作用域中 因此无需使用require('buffer')
 * 
 * 
 * 
**/
const buffer1 = Buffer.from('liuxiankun')
const buffer2 = Buffer.from([1,2,3,4])

const buffer3 = Buffer.alloc(20, 2)

// console.log(buffer1.length)
// console.log(buffer2)
// console.log(buffer3)




const buf = Buffer.from('hello world', 'ascii');
console.log(buf.toString())
console.log(buf.toString('hex'));
// 打印: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));