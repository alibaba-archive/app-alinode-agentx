# app-alinode-agentx

alinode的监控agent，在hoenycomb运行的集群上发布此app，即可获得alinode提供的监控能力

## 使用方法

两种办法：

1. 源码编译发布
```
git clone git@github.com:node-honeycomb/app-alinode-agentx.git
cd app-alinode-agentx
honeycomb package
# then upload out/app-alinode-agentx_xxx.tgz to your honeycomb cluster 
```

2. 通过打包服务pack，并发布到对应集群

## 配置服务

在honeycomb-console的控制台，提供如下配置， 配置项可以在alinode的app设置中找到

```
{
  "agentx": {
    "appid": "$id",
    "secret": "$secret"
  }
}
```

如有非公网集群，服务端地址需要自定义，可设置：
```
{
  "agentx": {
    "server": "$serverEndpoint", // 公共云服务为 wss://agentserver.node.aliyun.com:8080
    "appid": "$id",
    "secret": "$secret"
  }
}
```

