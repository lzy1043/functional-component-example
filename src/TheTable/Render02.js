export default {
  name: 'Render02',
  functional: true,
  props: {
    name: String
  },
  render: (h, ctx) => {
    return h('el-button', ctx.data, '点击')
  }
}