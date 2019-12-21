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
            src: "http://sverigesradio.se/topsy/direkt/srapi/132.mp3",
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
            src: "http://sverigesradio.se/topsy/direkt/srapi/163.mp3",
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
            src: "http://sverigesradio.se/topsy/direkt/srapi/164.mp3",
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
            src: "http://sverigesradio.se/topsy/direkt/srapi/701.mp3",
            title: "P4",
            artist: "Sveriges Radio"
          }
        ]}
    />
  </div>
)

export default IndexPage