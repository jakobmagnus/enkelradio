import React from "react"
import { Component } from "react"
import AudioPlayer from "react-modular-audio-player"

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

class P3 extends Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "http://sverigesradio.se/topsy/direkt/srapi/164.mp3",
          title: "P3",
          artist: "Sveriges Radio"
        }
      ]}
      rearrange={rearrangedPlayer}
      playerWidth="164px"
      iconSize="164px"
      playIcon="https://i.ibb.co/wp9hGSf/p3.png"
      playHoverIcon="https://i.ibb.co/wp9hGSf/p3.png"
      pauseIcon="https://i.ibb.co/wp9hGSf/p3.png"
      pauseHoverIcon="https://i.ibb.co/wp9hGSf/p3.png"
    />
  }
}

export default P3