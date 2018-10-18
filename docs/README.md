# 介绍

## 为什么叫 '日记'

当我开始学习 node ，想要藉此实现一个全栈项目的时候，我希望从网络上搜集一些系统的内容帮助我达成我的目标，但很不幸，这些内容基本呈现‘两极化’：

1. 简单的入门文章。确实通俗易懂，能够把架子搭出来，输出 `Hello world`，但仅限于此
2. github 上能找到很多功能丰富的项目。但除了对项目的几百字简单介绍，其他所有的功能实现都需要你自己去慢慢看

当时就有一个想法，要是有人能详细的介绍他实现项目的细节，快速引导我入门，并且告诉我实现的时候有哪些哪些坑，该怎么解决，那真是太美妙了，毕竟这些坑踩起来并不是太有意义。

所以就有了这个系列！

实现每个小功能的时候，我都会将实现步骤以及相关知识，记录到笔记中，只有这样，才能最真实的记录新手在完成项目时会遇到哪些坎。如果等我实现完了，再来写这些文章，写文章的角度就不一样了，也会忘了哪些是新手迫切想知道而我们认为无足轻重的知识点。

这就是 **日记** 的由来。

当然，在完成了项目后，我对整个实现过程做了一个回顾，并且将之前的笔记做了梳理，毕竟笔记上记录得相对零碎，也是希望能够更好地分享给大家。

## 什么样的一个项目

我实现的是一个博客系统，由三个项目构成：

* 博客前端

  博客C端，也就是用户平时访问的博客客户端，是一个采用 next.js\(React SSR 框架\) 实现的服务端渲染的项目。

  技术栈: next.js + mobx + Typescript + koa2

* 博客管理后台

  用于日常管理博客，如发布文章等，是一个使用 React 手工实现服务端渲染的项目。

  技术栈: React + React Router + mobx + Typescript + koa2

* 博客服务端

  博客得有后端服务吧，我这里把后端服务拆分出来，独立成一个项目，是为了实现和前端项目的解耦。本项目实现了一套 RESTful 风格的 API。

  技术栈: Koa2 + mongodb + Typescript

## 能学会什么

大家可能也发现了 Typescript 在三个项目中都有使用，因为 Typescript 确实弥补了 Javascript 先天的一些不足，这也是它越来越火的原因。如果你跟着这个系列走到最后，你能够学习到 node 的基础知识，掌握 node 框架 Koa2 和 数据库 mongodb 的日常开发能力，你能学习到 React 做服务端渲染的原理以及实现它的两种方试，状态管理后起之秀 mobx 的使用，当然，还有 Typescript 的基础知识和实践。

当然，诚挚地希望，看完这个系列的文章，大家能够对全栈知识有一个系统的认知。

## 适合什么样的人

1. 有 js 基础并且熟悉常用的 es6 知识的同学，当然，你还需要知道 React 的一些基础知识
2. 对 node 零基础或者了解得比较少的同学
3. 希望学习 Typescript 的同学

## 寄语

文章和项目肯定会有不足，如果大家看到了，希望及时指正（ github 中提 issue 或者 PR ）。

文章 github: [https://github.com/suanmei/full-stack](https://github.com/suanmei/full-stack)  
博客 github: [https://github.com/suanmei/blog](https://github.com/suanmei/blog)  
博客管理系统 github: [https://github.com/suanmei/blog-admin](https://github.com/suanmei/blog-admin)  
博客服务端 github: [https://github.com/suanmei/blog-apiv](https://github.com/suanmei/blog-apiv)
