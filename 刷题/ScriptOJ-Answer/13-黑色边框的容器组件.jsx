// 考查this.props.children的使用

// .blackBox {
//   border: 1px solid #000000;
// }

class BlackBorderContainer extends Component {
  /* TODO */
  render () {
    return <div>{
      this.props.children.map((node,index) => {
        return <div key={index} className="blackBox">{node}</div>
      })
    }
    </div>
  }
}

