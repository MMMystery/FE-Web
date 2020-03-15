// 考查高阶组件的使用以及注意点：所有props原封不动传给被包裹的组件, 类名可以匿名直接return。

// getData(url) 已经可以直接使用
// 本站的环境都可以使用 async/await

const loadAndRefresh = (url) => (WrappedComponent) => {
  return (
    class extends Component {
      constructor() {
        super();
        this.state = {
          content: ''
        }
      }

      componentWillMount() {
        this.refresh()
      }

      refresh = async () => {
        this.setState({
          content: "数据加载中..."
        })
        let content = await getData(url);
        this.setState({
          content: content
        })
      }

      render() {
        return <WrappedComponent {...this.props} refresh={(refresh) => this.refresh()}
                                 content={this.state.content}></WrappedComponent>
      }
    }
  )
}
