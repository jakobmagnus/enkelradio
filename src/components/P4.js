import React from "react"
import AudioPlayer from "react-modular-audio-player"
import "./layout.css"

let rearrangedPlayer = [
  {
    className: "P4",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

class P4 extends React.Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "https://http-live.sr.se/p4jamtland-mp3-128",
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