import React from "react"
import AudioPlayer from "react-modular-audio-player"
import "./layout.css"

let rearrangedPlayer = [
  {
    className: "P2",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

class P2 extends React.Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "http://sverigesradio.se/topsy/direkt/srapi/163.mp3",
          title: "P2",
          artist: "Sveriges Radio"
        }
      ]}
      rearrange={rearrangedPlayer}
      playerWidth="164px"
      iconSize="164px"
      playIcon="https://i.ibb.co/WBrYrxQ/p2.png"
      playHoverIcon="https://i.ibb.co/WBrYrxQ/p2.png"
      pauseIcon="https://i.ibb.co/WBrYrxQ/p2.png"
      pauseHoverIcon="https://i.ibb.co/WBrYrxQ/p2.png"
    />
  }
}

export default P2