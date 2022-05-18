import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Counter from "../Counter.vue"

describe("测试发出的事件", () => {
  it("断言发出的事件", () => {
    const wrapper = mount(Counter)
    // 获取button按钮，触发点击事件
    wrapper.find("button").trigger("click")
    // 断言emitted发出事件内是否有increment属性
    expect(wrapper.emitted()).toHaveProperty("increment")
  })

  it("断言发出的事件的参数", () => {
    const wrapper = mount(Counter)
    // 模拟点击两次
    wrapper.find("button").trigger("click")
    wrapper.find("button").trigger("click")
    // 获取emitted数组
    const increment = wrapper.emitted("increment")
    // 点击两次，emitted数组应该有两个元素
    expect(increment).toHaveLength(2)
    // 第一个参数为1
    expect(increment![0]).toEqual([2])
    // 第二个为2
    expect(increment![1]).toEqual([4])
  })
})
