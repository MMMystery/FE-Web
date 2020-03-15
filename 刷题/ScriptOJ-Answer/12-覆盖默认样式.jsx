// 考查一个函数来创建一个组件并且赋值给一个常量。同时考查了解构。

const getDefaultStyledPost = (defaultStyle) => {

  return (
    class Post extends React.Component {
      render() {
        return (
          <p style={{...defaultStyle, ...this.props.style}}>任意内容</p>
        )
      }
    }
  )
  // 或
  //   class Post extends React.Component {
  //     render() {
  //       return (
  //         <p style={{...defaultStyle, ...this.props.style}}>任意内容</p>
  //       )
  //     }
  //   }
  //   return Post;
}

