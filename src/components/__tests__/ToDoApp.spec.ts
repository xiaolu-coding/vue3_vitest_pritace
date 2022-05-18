import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoApp from "../ToDoApp.vue"
import exp from 'constants'

describe('测试ToDoApp组件', () => {
  it('render a todo', () => {
    // 使用mount渲染组件
    const wrapper = mount(ToDoApp)
    // 通过data-test找到相对应元素
    const todo = wrapper.get('[data-test="todo"]')
    // 断言元素的text文本是如此
    expect(todo.text()).toBe("Learn Vue.js 3")
  })

  it('测试添加todo', async () => {
    const wrapper = mount(ToDoApp)
    // 此时的todo只有一个
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
    // 输入框输入New todo
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    // 表单触发submit事件
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  it('测试完成待办事项', async () => {
    const wrapper = mount(ToDoApp)
    // 对checkbox进行交互
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
    
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})


