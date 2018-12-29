// 根据 todos 以及 filter 筛选出正确展示的 todo数组

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter(e => e.isCompleted)
    case 'active':
      return todos.filter(e => !e.isCompleted)
    default:
      return todos
  }
}
