# react 介绍

之前的处理 直接操作 dom 节点，react vue angular 虚拟 dom ，只要数据变虚拟 dom 结构就改变，最后将虚拟的 dom 转化成正真的。

## 单页面应用

### 搭建 react 开发环境

利用官方提供的脚手架 `create-react-app`

- 使用 npm 全局安装 `create-react-app`，`npm i create-react-app -g`,安装好之后就可以使用 create-react-app 命令了。
- 使用 create-react-app 创建一个 react 项目 `npm i create-react-app react-hello`
- 安装好了之后 `cd react-hello && npm start`,实现了使用 webpack 将 src 下的源码打包到 localhost:3000 的服务器下的 static/js/bundle.js 内。弹出的页面就是访问了该服务器下的 index.html(该 html 的模板就是项目下 public 内的 index.html)

### react 的 hello world

修改 src 下的内容，写出自己的 hello world

- 删除一些没有用的文件 logo.svg index.css app.test.js App.css
- 打开 index.js,删除 `import './index.css';`
- 打开 App.js,删除 `import logo from './logo.svg';` `import './App.css';` 并且把 return 内的所有内容删除,替换成 `<div>hello world</div>`

### react 内的 jsx 语法

jsx 语法：js 内部写 html。只有导入了 react 这个包，react 项目内才能写 jsx 语法。
使用 ReactDOM.render 将虚拟的 reactDom 加载到真实的 dom 节点上。
我们把 react 项目中的 js 称作为 组件。组件内部默认有个 render 方法 ,该方法内写 return，返回的内容就是该组件的 html 结构。
jsx 元素只能被包裹在一个闭合标签内，组件的 return 只能返回一个标签
react 组件内的 render 方法是默认就执行的，想要在 jsx 内使用 js 需要将 js 使用大括号包裹
jsx 内使用 style 属性 `style = {{width:'200px'}}`
jsx 的属性不能写成关键字 class -> className for -> htmlFor

### 组件的样式

1. 行内样式，但是必须写成 `style = {{width:'200px'}}`
2. 外链样式 直接新建 css 文件，当做模块导入即可 `import '路径需要写后缀名'`

**我们引入的样式都是全局的所以要注意不要和其他的组件冲突**
**一个组件最好对应一个组件的样式文件**

### react 图片处理

网上的图片可以直接使用
如何引入本地的图片 将图片当做模块导入到对应的组件内 `import pic from './img/1.jpeg'`

### react 的 state(状态)

react 的事件绑定，都是绑定在标签内部的 `<button onClick={fun}>+</button>` fun 是方法名,
通常 react 的事件函数定义成该组件的类的一个方法,那么绑定事件就要写成 `<button onClick={this.fun}>+</button>`
**我们在组件的函数内想要使用组件内的 this 需要将函数定义成箭头函数**

只要是页面发生改变就要使用状态控制,例如我们实现一个点击按钮数字加一，需要先在组件内部定义一个状态

```js
state = {
  num: 1
}
```

在 jsx 内部使用这个状态， `<span>{this.state.num}</span>`

想要修改 state 必须使用 setState，还要注意组件的 state 不能直接修改。要实现 +1 写成

```js
this.setState({
  num: this.state.num + 1
})
```

**注意：不能写成 this.state.num++ 因为 ++ 相当于重新赋值，就是直接修改了**
**setState 方法是异步的方法，该方法执行是需要一点点时间的，但是不影响其他语句的执行。所以直接在 setSate 方法后面输出 state 还是修改之前的 state。**
**_当修改了 state 时 render 会重新执行,只会重新渲染跟改变的 state 相关的 html_**
组件内部事件如何传参
假如我定义了一个函数是 changeModal，该函数内有一个参数，想给组件的某个 html 绑定事件,调用的时候传参，不能写成 `onClick={this.changeModal(true)}`，要写成 `onClick={() => {this.changeModal(true)}}`，因为 onClick 的属性值必须是一个函数，而该函数内部想要使用 this 的话必须定义成箭头函数。

### react 组件中的 setInterval

当我们需要在页面刷新的时候，使用 setInterval 更新 state，

### react 组件的 props 类型检查以及设置 props 的默认值

#### 类型检测

1. 引入 PropTypes `import PropTypes from 'prop-types'`
2. 在 class 类的外面设置 该组件的的 props 类型检测，比如组件名为 Card

   ```js
   Card.propTypes = {
     // 将该组件的 cardWidth 的属性值规定为字符串，也就是当父组件使用该组件的传 props 时，该属性的属性值需要是字符串类型
     cardWidth: PropTypes.string,
     // imgSrc 属性的值是字符串而且是必须的属性，也就是说父组件使用子组件的时候必须传递该属性
     imgSrc: PropTypes.string.isRequired
   }
   ```

   详细验证写法参考[链接](https://react.docschina.org/docs/typechecking-with-proptypes.html)

#### 设置默认值

直接在 class 外，对组件的 defaultProps 进行设置，该设置不需要依赖 prop-types 包的支持

```js
Card.defaultProps = {
  title: '标题',
  pra: '段落'
}
```

### react 表单

#### 受控组件(提倡)

1. 将表单的 value 设置成 state
2. 必须使用 onChange 事件修改 state
   如何使用 onChange 事件修改 state

   - 利用事件函数的事件对象获取输入的 value 值 `event.target.value`
   - 使用 setState 修改 `this.setState({val:event.target.value})`

3. 满足以上两个条件你的表单就变成了受控组件
   **`input` `textarea` `select` 这三个标签都可以使用上面的做法，改成 react 的受控组件**

#### 非受控组件

直接获取真实的 dom 节点获取 value 值即可
react 中如何获取真实的 dom 节点？

1. 使用原生 js `document.querySelector` 等方法获取
2. 使用 react 提供的 refs 获取
   refs 如何使用
   - 给元素的添加一个 ref 属性，属性值设为一个函数(箭头函数)
   - 给该函数添加一个参数,函数内部将该函数赋值给 this 的一个属性(this.inp =inp),那么该属性的属性值就是 真实的 dom 节点。

### react 的状态提升

1. 何时使用？
   当两个不相关的组件想要相互控制彼此的 state 的时候
2. 怎么使用？
   - 将要被修改的 state 写到两个组件的公共祖先组件中
   - 将祖先组件中的 state 当做 props 传递给需要的子组件
3. 为什么？
   因为子组件可以修改父组件的 state ，进而也就改变的 另外一个组件的 props。

#### 子组件如何修改父组件的 state

- 在父组件中定义修改 state 的方法
- 将该方法传递给需要修改的子组件

### react 路由(页面跳转) react-router

react 项目是单页面应用，要实现页面提转的话需要依赖 react 的 react-router-dom 包来实现,官网参考链接 [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

- 在项目下安装 react-router-dom `npm i react-router-dom`
- 在 App.js 内引入 BrowserRouter 。`import { BroswerRouter } from 'react-router-dom`
  BroswerRouter 是 react-router-dom 包内的一个 react 组件，该组件的作用是

### react 项目部署

##### 部署到 github gh-pages 分支

- 先确保本地项目能启动并且没有什么问题
- 更改 package.json 内容，添加 homepage
  ```json
    "homepage":"https://yourname.github.io/yourapp",
    "scripts":{
      "deploy": "gh-pages -d build"
    }
  ```
- 本地安装 gh-pages 包 `npm i gh-pages -D`
- 本地执行 `npm run build` 打包 react 项目到 build 文件夹
- 将本地的文件夹初始化为 git 仓库(不添加 README.md)，并且上传
- 执行 `npm run deploy` 将打包好的项目部署到 gh-pages 分之
- 查看页面即可访问项目
- 如果要更新项目的话 先更新本地的服务器代码，然后`npm run build`打包，打包完成之后，先上传到 master 分支，然后使用 `npm run deploy` 更新 gh-pahes 分支

##### 部署到 netlify 免费服务器

- 先确保本地项目能启动并且没有什么问题
- 将本地的文件夹初始化为 git 仓库(不添加 README.md)，并且上传
- 到 netlify 网站，选择 git 的某个仓库

###### react-redux-demo 参考地址

[项目文档参考地址](https://www.yuque.com/sunnyzz/react-redux)

### react 的 redux

1. 创建 store
   - 安装 redux `npm i redux`
   - 在 src 下新建 store/index.js 存储 store

#### redux 流程

1. 创建 store createStore(reducer) reducer 怎么写
2. 获取 store 内容 Provider 组件 ---> connect 方法 mstp
3. 修改 store dispatch ---> action ---> reducer

**优化 把组件内的 action 以及异步请求 都封装到 action 创建函数内 mdtp ，redux-thunk**

