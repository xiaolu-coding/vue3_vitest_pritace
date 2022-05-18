import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Nav from '../Nav.vue'
import exp from "constants"

describe('条件渲染 寻找元素', () => {
  it('使用get寻找元素', () => {
    const wrapper = mount(Nav)
    // get用法和querySelector相似，但是如果没有匹配的，测试会出错
    // get()假设元素确实存在并在它们不存在时引发错误。不建议使用它来断言存在
    const profileLink = wrapper.get('#profile')
    // 通过get获取到了元素，比对文本
    expect(profileLink.text()).toEqual('My Profile')
  }) 

  it('使用find和exists寻找元素', () => {
      const wrapper = mount(Nav)
      // 断言admin默认情况下为false
      expect(wrapper.find('#admin').exists()).toBe(false)
  })

  it('使用isVisiable', () => {
    const wrapper = mount(Nav)
    // 断言admin默认情况下为false
    expect(wrapper.find('#show').isVisible()).toBe(false)
  })

  // it('使用data寻找元素', () => {
  //   const wrapper = mount(Nav, {
  //         admin: true
  //   })

  //   expect(wrapper.get('#admin').text()).toEqual('Admin')
  // })
})
