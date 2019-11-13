import React from "react"
import AudioPlayer from "react-modular-audio-player"
import "./layout.css"

let rearrangedPlayer = [
  {
    className: "P1",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

class P1 extends React.Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "https://http-live.sr.se/p1-mp3-128",
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