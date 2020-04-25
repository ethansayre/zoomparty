import React from 'react';
//import { ZoomMtg } from '@zoomus/websdk';
// import Window from "./ZoomViewer.js"
//https://zoom.us/wc/5725490737/join?pwd=d3lUWkFXbXlBSmxGUFQwb2h3WlRRQT09&prefer=1&un=TWluZGF1Z2Fz
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6


class NotesViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill
  }
 
  handleChange = (value) => {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill value={this.state.text} onChange={this.handleChange} style={{ width: '100px', minWidth: '100%', height: '100px', minHeight: "100%", border: 0, borderRadius: "6px"}}/>
    );
  }
}

export default NotesViewer;