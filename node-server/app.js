const http = require('http');
// 导入解析 URL 地址的核心模块
const urlModule = require('url');

const server = http.createServer();
// 监听 服务器的 request 请求事件，处理每个请求
server.on('request', (req, res) => {
  const url = req.url;

  // 解析客户端请求的URL地址
  var info = urlModule.parse(url, true);
  // console.log(info);
  const {pathname,query}=info;

  // 如果请求的 URL 地址是 /getscript ，则表示要获取JSONP类型的数据
  if (pathname === '/getscript') {
    // 获取客户端指定的回调函数的名称
    var cbName = query.callback;
    // 手动拼接要返回给客户端的数据对象
    var data = {
      name: 'zs',
      age: 22,
      gender: '男',
      hobby: ['吃饭', '睡觉', '运动']
    }
    // 拼接出一个方法的调用，在调用这个方法的时候，把要发送给客户端的数据，序列化为字符串，作为参数传递给这个调用的方法：
    var result = `${cbName}(${JSON.stringify(data)})`;
    // 将拼接好的方法的调用，返回给客户端去解析执行
    res.end(result);
  } else {
    res.end('404');
  }
});

server.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000');
});