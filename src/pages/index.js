import React from "react"
import Channel from "../components/Channel"
import "../components/layout.css"

import P1 from "../images/P1.svg"
import P2 from "../images/P2.svg"
import P3 from "../images/P3.svg"
import P4 from "../images/P4.svg"

const IndexPage = () => (
  typeof window !== 'undefined' &&
  <div className="channels">
    <Channel
        playIcon={P1}
        playHoverIcon={P1}
        pauseIcon={P1}
        pauseHoverIcon={P1}
        audioFiles={[
          {
            src: "https://http-live.sr.se/p1-mp3-128",
            title: "P1",
            artist: "Sveriges Radio"
          }
        ]}
    />
    <Channel
        playIcon={P2}
        playHoverIcon={P2}
        pauseIcon={P2}
        pauseHoverIcon={P2}
        audioFiles={[
          {
            src: "https://http-live.sr.se/p2-mp3-128",
            title: "P2",
            artist: "Sveriges Radio"
          }
        ]}
    />
    <Channel
        playIcon={P3}
        playHoverIcon={P3}
        pauseIcon={P3}
        pauseHoverIcon={P3}
        audioFiles={[
          {
            src: "https://http-live.sr.se/p3-mp3-128",
            title: "P3",
            artist: "Sveriges Radio"
          }
        ]}
    />
    <Channel
        playIcon={P4}
        playHoverIcon={P4}
        pauseIcon={P4}
        pauseHoverIcon={P4}
        audioFiles={[
          {
            src: "https://http-live.sr.se/p4-mp3-128",
            title: "P4",
            artist: "Sveriges Radio"
          }
        ]}
    />
  </div>
)

export default IndexPage