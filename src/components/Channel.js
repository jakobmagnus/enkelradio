import React from "react"
import AudioPlayer from "react-modular-audio-player"
import "./layout.css"

const rearrangedPlayer = [
  {
    className: "channel",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

export const Channel = ( props ) => {
  return (
    <AudioPlayer
      className="channel"
      rearrange={rearrangedPlayer}
      {...props}
    />
  )
}

export default Channel
