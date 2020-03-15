// 考查原型关系，节点创建。virtual dom转dom逻辑。

class VNode {
  constructor(tagName,props,children){
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }
  render(){
    const dom = document.createElement(this.tagName);
    if(this.props){
      const props = Object.keys(this.props);
      props.map(prop => {
        dom.setAttribute(prop, this.props[prop]);
      })
    }

    if(this.children){
      this.children.map((child) =>{
        dom.appendChild(child instanceof VNode ? child.render():document.createTextNode(child));
      })
    }
    return dom;
  }
}

const h = (tagName, props, children) => new VNode(tagName, props, children)
