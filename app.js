'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');

/*************  alinode 接入逻辑 start ***************/

// 向 $HOME/.nodepath 写入 alinode 运行时的路径，这里假设运行应用进程的
// node 可执行文件和启动这个进程（agentx.js）的 node 是同一个（都是 alinode）
// Agent 会使用 $HOME/.nodepath 里写入的 node 路径来调用从控制台下发的命令
// 没有则使用全局的 Node.js 路径（which node）
const pathToAlinode = process.execPath;
const hintFile = path.join(os.homedir(), '.nodepath');
fs.writeFileSync(hintFile, path.dirname(pathToAlinode));

const Agent = require('agentx');
// 或者用其他方法，获取关于 server, appid 与 secret 的配置
// 生产环境中可能配置在环境变量里，或者通过某种方式推送配置到机器上
const config = require('./config');

// 应用在业务层面产生的异常日志的目录，大部分应用会通过各种 logger 模块输出。
// 常见的目录是 ${APP_HOME}/logs/
const logdir = config.logdir;
const conf = {};
const privateConfig = JSON.parse(process.env.HC_APP_CONFIG);
// config.agentx 包含 server appid secret 3个字段
Object.assign(conf, config.agentx, privateConfig.config.agentx || {});

exports.options = conf;
exports.run = function (cb) {
  const agent = new Agent(conf);
  agent.run();
  cb(null, {});
};
