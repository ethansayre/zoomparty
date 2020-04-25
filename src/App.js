import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Window from './components/Window.js'
import ZoomViewer from './components/ZoomViewer.js'
import NotesViewer from './components/NotesViewer.js'
import TrelloViewer from './components/TrelloViewer.js'
import WhiteboardViewer from './components/WhiteboardViewer.js'

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

function App() {
  return (
    <div className="App">
      <div className="appbar" style={{marginTop: 5}}>
        <a style={{marginRight: 10}} class={`button is-primary is-rounded`} onClick={() => {}}>
            <span class="icon is-small">
            <i class="fas fa-mouse-pointer"></i>
            </span>
            <span>Trello</span>
        </a>
      </div>
      <Window disabled handle="card-header">
        <WhiteboardViewer />
      </Window>
      <Window handle="board-header">
        <TrelloViewer />
      </Window>
    </div>
  );
}

export default App;

// <Window> ql-toolbar
//         <ZoomViewer />
//       </Window>
//       <Window>
//         <TrelloViewer />
//       </Window>
