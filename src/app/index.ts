import Koa from 'koa';
import { createServer } from 'http';



// 初始化 Koa 应用实例
const app = new Koa();

// 绑定到 HTTP 服务器
const httpServer = createServer(app.callback());

export default httpServer;