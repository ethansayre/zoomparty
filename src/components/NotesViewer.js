import React from 'react';
//import { ZoomMtg } from '@zoomus/websdk';
// import Window from "./ZoomViewer.js"
//https://zoom.us/wc/5725490737/join?pwd=d3lUWkFXbXlBSmxGUFQwb2h3WlRRQT09&prefer=1&un=TWluZGF1Z2Fz
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import firebase from 'firebase';


class NotesViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill
  }

  componentDidMount = () => {
      firebase.database().ref('streams/main/notes').on("value", (snapshot) => {
          if (snapshot.val() != null) {
              this.setState({text: snapshot.val()});
          } else {
              this.setState({text: ""});
          };
      });
  }
  handleChange = (value) => {
    this.setState({ text: value }, () => {
        firebase.database().ref('streams/main/notes').set(this.state.text);
    });
  }

  render() {
    return (
      <>
        <span class="icon is-small headericon ql-toolbar" style={{position: "absolute", top: 5, left: 5, color: "#5068a9"}}>
          <i class="fas fa-grip-horizontal headericon" style={{position: "absolute", top: 0, left: 0}}></i>
        </span>
        <ReactQuill value={this.state.text} onChange={this.handleChange} style={{ width: '100px', minWidth: '100%', height: '100px', minHeight: "100%", border: 0, borderRadius: "6px"}} />
      </>
    );
  }
}

export default NotesViewer;