'use strict';
const path = require('path');
module.exports = {
  agentx: {
    server: 'wss://agentserver.node.aliyun.com:8080',
    appid: '',
    secret: '',
    heartbeatInterval: 60,
    reconnectDelay: 10,
    reportInterval: 60,
    // 必填，供 alinode 写入数据日志与存放性能快照的路径，需要与 NODE_LOG_DIR
    // 环境变量一致， nodejs-appctl 默认设置在 ${APP_HOME}/logs/
    // logdir: process.env.NODE_LOG_DIR || path.join(__dirname, 'logs'),
    logdir: process.env.NODE_LOG_DIR || '/tmp/',
    // 必填，commandx 路径，如果通过 package.json 打包应该在 node_modules/commandx
    cmddir: path.join(__dirname, 'node_modules/commandx')
  }
};
