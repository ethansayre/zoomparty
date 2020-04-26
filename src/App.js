import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Window from './components/Window.js'
import ZoomViewer from './components/ZoomViewer.js'
import NotesViewer from './components/NotesViewer.js'
import TrelloViewer from './components/TrelloViewer.js'
import WhiteboardViewer from './components/WhiteboardViewer.js'
import Login from './components/Login.js'

var firebaseConfig = {
    apiKey: "AIzaSyCLa5nqOLuWf1rnZwHRMRnx2jK-81MwL2Q",
    authDomain: "zoom-party-cd262.firebaseapp.com",
    databaseURL: "https://zoom-party-cd262.firebaseio.com",
    projectId: "zoom-party-cd262",
    storageBucket: "zoom-party-cd262.appspot.com",
    messagingSenderId: "592576745585",
    appId: "1:592576745585:web:0abb54bc2761c72a494bd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFunctions: [],
      loggedIn: false,
      meetingId: null,
      password: null
    }
    this.renderFunctions = [this.renderTrello, this.renderNotes, this.renderWhiteboard];
  }

  logInHandler = (meetingId, password) => {
    this.setState({
      loggedIn: true,
      meetingId: meetingId,
      password: password
    })
  }

  renderTrello = () => {
    return (
      <Window handle="headericon">
        <TrelloViewer />
      </Window>
    )
  }

  renderNotes = () => {
    return (
      <Window handle="ql-toolbar">
        <NotesViewer />
      </Window>
    )
  }

  renderWhiteboard = () => {
    return (
      <Window disabled handle="card-header">
        <WhiteboardViewer />
      </Window>
    )
  }

  renderAll = ()  => {
    const children = [];
    this.state.activeFunctions.forEach((value, index) => {
      children.push(this.renderFunctions[value]());
    });
    return children;
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <div className="appbar" style={{alignItems: "center"}}>
            <div className="appbarChild" style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20, width: "90%", backgroundColor: "#324e7b", margin: "auto"}}>
              <a style={{margin: 7, backgroundColor: "#f8f8f8", color: "#5068a9"}} class={`button is-primary is-rounded`} onClick={() => {}}>
                  <span class="icon is-small">
                  <i class="fas fa-video"></i>
                  </span>
                  <span>Zoom</span>
              </a>
              <a style={{margin: 7, backgroundColor: "#f8f8f8", color: "#5068a9"}} class={`button is-primary is-rounded`} onClick={() => {this.setState(prevState => ({
                activeFunctions: [...prevState.activeFunctions, 0]
              }))}}>
                  <span class="icon is-small">
                  <i class="fab fa-trello"></i>
                  </span>
                  <span>Trello</span>
              </a>
              <a style={{margin: 7, backgroundColor: "#f8f8f8", color: "#5068a9"}} class={`button is-primary is-rounded`} onClick={() => {this.setState(prevState => ({
                activeFunctions: [...prevState.activeFunctions, 1]
              }))}}>
                  <span class="icon is-small">
                  <i class="fas fa-pen-square"></i>
                  </span>
                  <span>Docs</span>
              </a>
              <a style={{margin: 7, backgroundColor: "#f8f8f8", color: "#5068a9"}} class={`button is-primary is-rounded`} onClick={() => {this.setState(prevState => ({
                activeFunctions: [...prevState.activeFunctions, 2]
              }))}}>
                  <span class="icon is-small">
                  <i class="fas fa-chalkboard-teacher"></i>
                  </span>
                  <span>Whiteboard</span>
              </a>
              <a style={{margin: 7, backgroundColor: "#f8f8f8", color: "#5068a9"}} class={`button is-primary is-rounded`} onClick={() => {this.setState(prevState => ({
                activeFunctions: [...prevState.activeFunctions, 0]
              }))}}>
                  <span class="icon is-small">
                  <i class="fas fa-code-branch"></i>
                  </span>
                  <span>Custom</span>
              </a>
            </div>
          </div>
          <div className="bounds" style={{width: window.innerWidth, height: window.innerHeight}}>
            {this.renderAll()}
            
          </div>
        </div>
      );
    } else {
      return (
        <Login />
      );
    }
    
  }
}

export default App;

// <Window> ql-toolbar
//         <ZoomViewer />
//       </Window>
//       <Window>
//         <TrelloViewer />
//       </Window>
// <Window disabled handle="card-header">
//             <WhiteboardViewer />
//           </Window>
//           <Window handle="headericon">
//             <TrelloViewer />
//           </Window>