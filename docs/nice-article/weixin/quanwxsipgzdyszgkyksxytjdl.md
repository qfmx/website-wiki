---
title: 全网显示 IP 归属地，用上这个开源库，实现也太简单了！
shortTitle: 全网显示 IP 归属地，用上这个开源库，实现也太简单了！
description: 用上开源库，给自己的网站加上IP属地！
author: 陌溪
category:
  - 微信公众号
head:
  - - meta
    - name: description
      content: 用上开源库，给自己的网站加上IP属地！
---

细心的小伙伴可能会发现，最近蘑菇新上线了 **IP** 属地的功能，小伙伴在发表动态、发表评论以及聊天的时候，都会显示自己的 **IP** 属地信息

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-60ba9e45-080c-4dca-922e-cccfd3071587.jpg)

动态显示IP属地

在蘑菇群聊中，也可以展示 IP 属地，下面是小伙伴们在交流群中显示的

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-7fefb9a6-d55d-4764-8197-bd007395d6db.jpg)

下面，我就来讲讲，**Java** 中是如何获取 **IP** 属地的，主要分为以下几步

*   通过 HttpServletRequest 对象，获取用户的 **IP** 地址
*   通过 IP 地址，获取对应的省份、城市

首先需要写一个 **IP** 获取的工具类，因为每一次用户的 **Request** 请求，都会携带上请求的 **IP** 地址放到请求头中。

```
public class IpUtil {
```

这里有三个名词，分别是

*   **X-Forwarded-For**：**一个 HTTP** 扩展头部，主要是为了让 **Web** 服务器获取访问用户的真实 **IP** 地址。每个 **IP** 地址，每个值通过逗号+空格分开，最左边是最原始客户端的 **IP** 地址，中间如果有多层代理，每⼀层代理会将连接它的客户端 **IP** 追加在 **X-Forwarded-For** 右边。
*   **X-Real-IP**：一般只记录真实发出请求的客户端IP
*   **Proxy-Client-IP**：这个一般是经过 **Apache http** 服务器的请求才会有，用 **Apache http** 做代理时一般会加上 **Proxy-Client-IP** 请求头
*   **WL-Proxy-Client-IP**：也是通过 Apache http 服务器，在 **weblogic** 插件加上的头。

在我们获取到用户的 **IP** 地址后，那么就可以获取对应的 **ip** 信息了

蘑菇最开始使用的是淘宝 **IP** 库

> 地址：https://ip.taobao.com/

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-d1796439-3c8b-4fb5-bf21-ff0057a21d92.jpg)

接入方式也比较简单，就是通过封装一个 **http** 请求，传入用户的 **ip** 作为参数，就可以返回 **ip** 对应的国家，省，城市 信息

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-f4108a0c-8cf3-400d-a108-f126faded625.jpg)

原来的请求方式如下

```
/**
```

但是，之前接入淘宝 **IP** 库的时候，也经常会遇到服务不可用的情况，并且由于限制了 **QPS** 为 **1**，所以如果访问量大的话，就没办法获取了。

而到现在的话倒好了，这个接口也不对外提供服务了，直接下线了，不让调用了。

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-698d6eaa-3ca1-4a76-9ba3-7cfd6624b675.jpg)

后面，陌溪在 **Github** 冲浪的时候，发现了 **Ip2region** 项目。

一个准确率 **99.9%** 的离线 **IP** 地址定位库，**0.0x** 毫秒级查询，**ip2region.db** 数据库只有数 **MB**，提供了 java,php,c,python,nodejs,golang,c# 等查询绑定和**Binary**，**B树**，内存三种查询算法。

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-45292cab-6e8b-465a-8ab4-4ad9e99d32f0.jpg)

数据聚合了一些知名 **ip** 到地名查询提供商的数据，这些是他们官方的的准确率，经测试着实比经典的纯真 **IP** 定位准确一些。**ip2region** 的数据聚合自以下服务商的开放 **API** 或者数据。

*   80%, 淘宝IP地址库, http://ip.taobao.com/
*   ≈10%, GeoIP, https://geoip.com/
*   ≈2%, 纯真IP库, http://www.cz88.net/

> **备注**：如果上述开放API或者数据都不给开放数据时ip2region将停止数据的更新服务。

每条 **ip** 数据段都固定了格式：

```
_城市Id|国家|区域|省份|城市|ISP_
```

只有中国的数据精确到了城市，其他国家有部分数据只能定位到国家，后前的选项全部是 **0**，已经包含了全部你能查到的大大小小的国家

生成的数据库文件 **ip2region.db** 只有几 **MB**，最小的版本只有 **1.5MB**，随着数据的详细度增加数据库的大小也慢慢增大，目前还没超过 **8MB**。

## 内置的三种查询算法

全部的查询客户端单次查询都在 **0.x** 毫秒级别，内置了三种查询算法

*   **memory** 算法：整个数据库全部载入内存，单次查询都在0.1x毫秒内，C语言的客户端单次查询在0.00x毫秒级别。
*   **binary** 算法：基于二分查找，基于ip2region.db文件，不需要载入内存，单次查询在0.x毫秒级别。
*   **b-tree** 算法：基于btree算法，基于ip2region.db文件，不需要载入内存，单词查询在0.x毫秒级别，比binary算法更快。

## ip2region安装

下面，就让我们给项目引入 **ip2region**，进行 **ip** 信息转换吧

首先引入 **maven** 依赖

```
<dependency>
```

然后编写一个工具类 **IpUtils** ，首先需要加载 **ip2region.db** 文件

```
static {
```

在加载的时候，需要下载仓库中的 **ip2region.db** 文件，然后放到 **resource** 目录下

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-0e8d29e4-8374-461b-b5cb-2f7be9891b8f.jpg)

然后，通过内置的三种算法，分别转换用户 **ip** 地址

```
    public static String getCityInfo(String ip) {
```

下面，我们编写 **main** 函数进行测试，发现可以正常的解析出 **ip** 信息

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-c7dabe2e-93e5-4c18-bf42-dcb44d6a2bb3.jpg)

由于 ip 属地在国内的话，只会展示省份，而国外的话，只会展示国家。所以我们还需要对这个方法进行一下封装，得到获取 IP 属地的信息。

```
/**
```

下面，我们在找一个 国外的 **IP** 测试一下效果。可以看到已经能够正常的显示 **IP** 属地信息了~

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-677306bd-bac7-4d43-99d2-324f7f01b265.jpg)

到这里如果获取用户的 IP 属地已经完成啦，如果想要了解关于更多 **ip2region** 的功能，欢迎访问其 **Github** 地址进行学习。

## 项目地址

https://github.com/lionsoul2014/ip2region

* * *

**微信8.0将好友放开到了一万，小伙伴可以加我大号了，先到先得，再满就真没了**

**扫描下方二维码即可加我微信啦，`2022，抱团取暖，一起牛逼。`**

![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-7dd82667-7566-4c78-9aff-da27d172b7ab.jpg)

## 推荐阅读

*   [新来个技术总监，把DDD落地的那叫一个高级，服气！](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501082&idx=1&sn=c2ad0e4ba438dab00f89660d942707d3&scene=21#wechat_redirect)
*   [还在用命令行看日志？快用Kibana吧，可视化日志分析YYDS！](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247501074&idx=1&sn=629db39555b3d344f928b87abecbba69&scene=21#wechat_redirect)
*   [Grafana 9 正式发布，更易用，更酷炫了！](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247500998&idx=1&sn=58d1222ef56fa3bef2abeb832c3a3c32&scene=21#wechat_redirect)
*   [Mall电商实战项目全面升级！支持最新版SpringBoot，干掉循环依赖...](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247500820&idx=1&sn=9895bd4c39b90d45eb2a10efedb236ac&scene=21#wechat_redirect)
*   [阿里出品！SpringBoot应用自动化部署神器，IDEA版Jenkins？](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247500584&idx=1&sn=14ab8fa74ed8391a5cb91449f699123a&scene=21#wechat_redirect)
*   [再见命令行！一键部署应用到远程服务器，IDEA官方Docker插件真香！](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247500482&idx=1&sn=713a30c88cea125f4768e6a0df939600&scene=21#wechat_redirect)
*   [重磅更新！Mall实战教程全面升级，瞬间高大上了！](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247499376&idx=1&sn=3ed28795cdd35fbaa3506e74a56703b0&scene=21#wechat_redirect)
*   [40K+Star！Mall电商实战项目开源回忆录！](https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247486684&idx=1&sn=807fd808adac8019eb2095ba088efe54&scene=21#wechat_redirect)



![](http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-quanwxsipgzdyszgkyksxytjdl-ca4d4747-df0a-434e-9512-4fba2dcb272a.jpg)

>转载链接：[https://mp.weixin.qq.com/s/tQ-4ClnfCucUREF-_ynQ2g](https://mp.weixin.qq.com/s/tQ-4ClnfCucUREF-_ynQ2g)，出处：macrozheng，整理：沉默王二