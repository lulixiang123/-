## 常用指令

创建next+ts项目 `npx create-next-app [project-name] --typescript`

运行next项目 `npm run dev`

## 项目结构

pages/ 页面目录,会自动生成路由

pages/api/ 服务器端代码目录

pages/_app 项目的模板页,全局配置等

public/ 公共文件目录

style/ 样式目录

## 渲染

渲染分为静态生成和服务器端渲染

**静态生成**

getStaticProps(在构建时设置数据)

getStaticPaths(指定动态路由获取数据)

**服务端渲染**

getServerSideProps(获取每个请求的数据)

# **路由**

#### 标签式导航跳转

导入: `import Link from 'next/link'`

使用: `<Link href="/home?name=xiaohong">首页</Link>`

如果需要传递对象可写成 `<Link href={{pathname:'/home',query:{name:'xiaohong'}}}>首页</Link>`

#### Router模块进行跳转

导入: `import Router from 'next/router`

使用: `Router.push('/home?name=xiaohong')`

如果需要传递对象可写成 `Router.push({pathname:'/home',query:{name:'xiaohong'}})`

**获取参数**

通过props中添加router,然后通过props.query.[属性名]获取

**路由钩子**

routerChangeStart(路由变化开始时)

routerChangeComplete(路由变化结束时)

routeChangeError(路由跳转出错)

beforeHistoryChange(浏览器history出发前)

hashChangeStart(hash跳转开始时)

hashChangeComplete(hash跳转结束时)

通过Router.events.on(钩子名,回调函数)注册

# 优化

### 懒加载模块

1.在需要懒加载组件的页面中引入 `import dynamic from 'next/dynamic'`

2.使用dynamic `const 组件名 = dynamic(import('组件路径'))`

当懒加载组件被使用才加载

### 异步方法

使用异步方法包裹import xxx, 当导入时才会加载 例如:

`const [nowTime,setTime] = useState(Date.now())`

`const changeTime= async ()=>{ //把方法变成异步模式`

`const moment = await import('moment') //等待moment加载完成`

`setTime(moment.default(Date.now()).format()) //注意使用defalut`

`}`

### Head标签

####方法1：在各个页面加上<Head>标签

每个页面写自己的Head标签

####方法2：定义全局的Head

创建一个Header组件,引入next/head（`import Head from 'next/head'`）,每个页面引入这个组件

###让Next.js支持CSS文件

安装@zeit/next-css,建立一个next.config.js,进行配置

配置:

`const withCss = require('@zeit/next-css')`

`if(typeof require !== 'undefined'){
require.extensions['.css']=file=>{}
}`

`module.exports = withCss({})`

### 按需加载Ant Design

## 注意点

全局样式文件不需要加.module字段,而局部文件需要 例如 globals.css(全局) 与 Home.module.css(局部)
同时在组件应作为模块引入,类名作为属性

