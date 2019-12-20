- http状态码
- 说一下https的工作原理，里面涉及到的加密算法都有哪些？
- https相关原理，涉及中间人攻击，证书协议，加解密内容。
- HTTP协议（超文本传输协议）
```
1.0 协议缺陷:
无法复用链接，完成即断开，重新慢启动和 TCP 3次握手
head of line blocking: 线头阻塞，导致请求之间互相影响

1.1 改进:

长连接(默认 keep-alive)，复用
host 字段指定对应的虚拟站点
新增功能:

断点续传
身份认证
状态管理
cache 缓存

Cache-Control
Expires
Last-Modified
Etag




2.0:
多路复用
二进制分帧层: 应用层和传输层之间
首部压缩
服务端推送

```