import React from 'react';
//import { ZoomMtg } from '@zoomus/websdk';
// import Window from "./ZoomViewer.js"
import IframeResizer from 'iframe-resizer-react'
//https://zoom.us/wc/5725490737/join?pwd=d3lUWkFXbXlBSmxGUFQwb2h3WlRRQT09&prefer=1&un=TWluZGF1Z2Fz

class ZoomViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <span class="icon is-small headericon" style={{position: "absolute", top: 5, left: 5, color: "#f8f8f8", width: "100%", height: "200%"}}>
          <i class="fas fa-grip-horizontal headericon" style={{position: "absolute", top: 0, left: 0}}></i>
        </span>
        <IframeResizer
          log
          src={`https://zoom.us/wc/${this.props.meetingId}/join?pwd=${this.props.password}&prefer=1&un=${this.props.name}`} sandbox={"allow-forms allow-scripts allow-same-origin"} allow={"microphone; camera; fullscreen"}
          style={{ width: '100px', minWidth: '100%', height: '100px', minHeight: "100%", border: 0, borderRadius: "6px"}}
        />
      </>
    );
  }
}

export default ZoomViewer;