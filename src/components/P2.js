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
          src: "https://http-live.sr.se/p2-mp3-128",
          title: "P2",
          artist: "Sveriges Radio"
        }
      ]}
      rearrange={rearrangedPlayer}
      playerWidth="132px"
      iconSize="132px"
      playIcon="https://i.ibb.co/WBrYrxQ/p2.png"
      playHoverIcon="https://i.ibb.co/WBrYrxQ/p2.png"
      pauseIcon="https://i.ibb.co/WBrYrxQ/p2.png"
      pauseHoverIcon="https://i.ibb.co/WBrYrxQ/p2.png"
    />
  }
}

export default P2
