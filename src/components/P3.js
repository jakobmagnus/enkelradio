import React from "react"
import AudioPlayer from "react-modular-audio-player"
import "./layout.css"

let rearrangedPlayer = [
  {
    className: "P3",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

class P3 extends React.Component {
  render() {
    return <AudioPlayer
      audioFiles={[
        {
          src: "https://http-live.sr.se/p3-mp3-128",
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