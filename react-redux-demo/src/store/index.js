import { createStore } from 'redux'

// store 就是 redux 存储 state 的地方
// createStore 是 redux 中创建 store 的方法
// createStore 接收一个函数作为参数 我们将这个函数叫做  reducer
// reducer 函数内必须返回一个 state 作为 store 中的数据
const reducer = () => [{ id: 1, title: 'react' }]
const store = createStore(reducer)

export default store
