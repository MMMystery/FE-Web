// 考查ref的使用

class Post extends Component {

  render () {
    return (<p onClick={()=>{console.log(this.pNode.clientHeight)}} ref={child => {this.pNode = child}}>{this.props.content}</p>)
  }
}
