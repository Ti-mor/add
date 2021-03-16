// 定义一个类，用于创建vue实例
class Vue {
  constructor(options = {}) {
    this.$el = options.el
    this.$data = options.data

    // 如果指定了el参数，对el进行解析
    if (this.$el) {
      // compiler负责解析模板内容
      // 需要模板和数据
      new Compiler(this.$el, this)
    }
  }
}