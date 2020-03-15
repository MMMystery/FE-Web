// 考查高级组件中context传递参数给子组件的使用，context可以用于跨组件传递参数。

const makeProvider = (data) => (WrapedComponent) =>{
  return class extends Component {
    static childContextTypes = {
      data: PropTypes.any
    }

    getChildContext() {
      return { data }
    }
    render(){
      return <WrapedComponent/>
    }
  }
}

