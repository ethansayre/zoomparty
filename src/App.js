import React from 'react';
import logo from './logo.svg';
import './App.css';
import Window from './components/Window.js'
import ZoomViewer from './components/ZoomViewer.js'
import NotesViewer from './components/NotesViewer.js'

function App() {
  return (
    <div className="App">
      <Window>
        <NotesViewer />
      </Window>
      <Window>
        <ZoomViewer />
      </Window>
    </div>
  );
}

export default App;
