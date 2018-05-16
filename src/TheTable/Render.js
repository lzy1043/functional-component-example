export default {
  name: 'Render',
  functional: true,
  props:{
    params: Object,
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props.params)
  }
}