import React from 'react';
//import { ZoomMtg } from '@zoomus/websdk';
// import Window from "./ZoomViewer.js"
import IframeResizer from 'iframe-resizer-react'

import Window from './components/Window.js'
import ZoomViewer from './components/ZoomViewer.js'
import NotesViewer from './components/NotesViewer.js'
import TrelloViewer from './components/TrelloViewer.js'
import WhiteboardViewer from './components/WhiteboardViewer.js'

class TrelloViewer extends React.Component {
  renderNotes () => {
    <Window handle="ql-toolbar">
      <NotesViewer />
    </Window>
  }
}

export default TrelloViewer;