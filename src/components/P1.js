import React, { Component } from 'react'
import AudioPlayer from "react-modular-audio-player";

let rearrangedPlayer = [
  {
    className: "Beatles",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

class P1 extends Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "http://sverigesradio.se/topsy/direkt/srapi/132.mp3",
          title: "P1",
          artist: "Sveriges Radio"
        }
      ]}
      rearrange={rearrangedPlayer}
      playerWidth="164px"
      iconSize="164px"
      playIcon="https://i.ibb.co/wLGF7kV/p1.png"
      playHoverIcon="https://i.ibb.co/wLGF7kV/p1.png"
      pauseIcon="https://i.ibb.co/wLGF7kV/p1.png"
      pauseHoverIcon="https://i.ibb.co/wLGF7kV/p1.png"
    />
  }
}

export default P1