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

class P4 extends Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "http://sverigesradio.se/topsy/direkt/srapi/200.mp3",
          title: "P4",
          artist: "Sveriges Radio"
        }
      ]}
      rearrange={rearrangedPlayer}
      playerWidth="164px"
      iconSize="164px"
      playIcon="https://i.ibb.co/wWyQwvm/p4.png"
      playHoverIcon="https://i.ibb.co/wWyQwvm/p4.png"
      pauseIcon="https://i.ibb.co/wWyQwvm/p4.png"
      pauseHoverIcon="https://i.ibb.co/wWyQwvm/p4.png"
    />
  }
}

export default P4