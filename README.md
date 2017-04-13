# info

这个项目是为了毕业设计而设计和制作的一个简单的信息采集系统，前端采用AngularJS框架，后端使用Node.JS，数据库选择了MongoDB。

## 项目简介

项目使用grunt构建工具，利用`generator-angular`构建生成前端结构,后由于需要使用嵌套路由，改为使用`generator-angular-ui-router`。在搭建项目的时候，采用前后端分离的结构，后端代码在deploy目录下，编译完成后，自动将打包压缩好的前端代码拷贝到后端public目录下

## 依赖环境

1. 确保你已安装Node.js
2. 由于采用了compass，所以你需要安装Ruby
3. 安装Redis
4. 安装MongoDB
5. 在info目录下执行`npm install & bower install` 来完成前端依赖的安装
6. 在deploy目录下执行`npm install` 来完成后端依赖安装

## 如何运行

1. 在info目录下执行`grunt serve`来运行前端程序
2. 进入deploy目录下执行`npm start`来启动后端服务器
3. 打包请执行 `grunt build`

## 备注
  1.本项目只用来了解学习相关技术栈，故程序存在些许BUG，而且在安全性方面并未做优化


* Made By Yan Zhi Ru
* [Github](https://github.com/ZhiRuYan/info)

