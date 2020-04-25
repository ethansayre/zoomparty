import React from 'react';
import {Rnd} from 'react-rnd';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x == null ? 0 : props.x,
      y: props.y == null ? 0 : props.y,
      width: props.width == null ? 300 : props.width,
      height: props.height == null ? 300 : props.height
    }
  }
  render() {
    return (
      <Rnd
        size={{ width: this.state.width,  height: this.state.height, borderRadius: "6px"}}
        style={{border: "1px"}}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
        onResizeStop={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
        }}
        enableResizing={this.props.disabled != null ? { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false } : { top:true, right:true, bottom:true, left:true, topRight:true, bottomRight:true, bottomLeft:true, topLeft:true }}
        dragHandleClassName={this.props.handle}
        bounds=".bounds"
      >
        {this.props.children}
      </Rnd>
    );
  }
}

export default Window;