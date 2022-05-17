import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoApp from "../ToDoApp.vue"

describe('测试ToDoApp组件', () => {
  it('render a todo', () => {
    // 使用mount渲染组件
    const wrapper = mount(ToDoApp)
    // 通过data-test找到相对应元素
    const todo = wrapper.get('[data-test="todo"]')
    // 断言元素的text文本是如此
    expect(todo.text()).toBe("Learn Vue.js 3")
  })
})
