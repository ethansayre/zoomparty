import React from 'react';
import {Rnd} from 'react-rnd';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
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
      >
        {this.props.children}
      </Rnd>
    );
  }
}

export default Window;