import React from 'react';
//import { ZoomMtg } from '@zoomus/websdk';
// import Window from "./ZoomViewer.js"
import IframeResizer from 'iframe-resizer-react'
//https://zoom.us/wc/5725490737/join?pwd=d3lUWkFXbXlBSmxGUFQwb2h3WlRRQT09&prefer=1&un=TWluZGF1Z2Fz

class TrelloViewer extends React.Component {
  render() {
    return (
      <IframeResizer
        log
        src={"https://trello.com/b/SyeJVTd6.html"} sandbox={"allow-forms allow-scripts allow-same-origin"} allow={"microphone; camera; fullscreen"}
        style={{ width: '100px', minWidth: '100%', height: '100px', minHeight: "100%", border: 0, borderRadius: "6px"}}
      />
    );
  }
}

export default TrelloViewer;