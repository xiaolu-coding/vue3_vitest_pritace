import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Form from "../Form.vue"

describe('测试表格', () => {
  it('设置元素值', async () => {
    const wrapper = mount(Form)

    const input = wrapper.get('input')

    await input.setValue('myEmail')

    expect(input.element.value).toEqual('myEmail')
  })

  it('测试触发事件', async () => {
    const wrapper = mount(Form)

    await wrapper.find('input').setValue('myEmail')

    await wrapper.find('button').trigger('click')

    const submitEvent = wrapper.emitted('submit')

    expect(submitEvent![0][0]).toBe("myEmail")

  })
})
