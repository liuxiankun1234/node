什么是Node.js?
	官网描述
	Node.js是一个基于Chrome V8引擎的JavaScript运行环境
	Node.js使用了一个事件驱动 非阻塞式I/O的模型 轻量高效

在Node.js里运行JS和在Chrome里运行JS有什么不同
	几乎没有不一样
	Node.js没有浏览器API document window
	Node.js让你用类似的方式，控制整个计算机

Node.js能用来做什么？
	Web服务
		搜索引擎优化 + 首屏速度优化 = 服务端优化
		服务端渲染 + 前后端同构 = Node.js

	可扩展性比较好



BFF层(Backend for Frontend)
	对用户侧提供HTTP服务
	使用后端RPC服务



Common.js模块化 需要看下



Koa VS Express
express门槛低 koa更强大优雅
express封装更多东西 开发更快速 koa可定制性更高
express在非异步情况下 符合洋葱模型 在异步情况下不支持洋葱模型（koa支持异步洋葱模型）


RPC调用(Remote Procedure Call)

和 Ajax 有什么相同点？
	都是两个计算机之间的网络通信
	需要双方约定一个数据格式

和 Ajax 有什么不同点？
	不一定使用DNS作为寻址服务（RPC一般是内网请求 使用DNS寻址不划算）
	应用层协议一般不使用HTTP协议（RPC一般使用二进制协议）
	基于UDP或TCP协议

寻址/负载均衡
	RPC：使用特有服务进行寻址

TCP通信方式
	单工通信
		仅支持一端给另一端发送数据包（client--->server 或者 server----> client）
	半双工通信(轮番单工通信)
		同一时间之内 仅支持一端给另一端发送数据包
	全双工通信
		client/server 可以随意发送数据包

为什么使用二进制协议
	HTTP协议数据或者是HTML或者是JSON数据格式(文本协议) 体积大
	更小的数据包体积
	更快地编解码速率