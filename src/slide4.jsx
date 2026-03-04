import './slideDefault.css'
import { useState } from "react"
import ReactPlayer from "react-player"

export default function Slide3() {
  const [play, setPlay] = useState(false)

  return (
    <section>
      <h2>Otrzymywanie kwasów karboksylowych</h2>
      <div style={{
        width: "80vw",
        maxWidth: "600px",
        aspectRatio: "16/9",
        margin: "auto",
        alignSelf:"right"
      }}>
        
      <ReactPlayer
        src={"https://www.youtube.com/watch?v=vcm7T32KqfU&hl=pl"}
        style={{ margin: "auto"}}
        volume={1}
        controls
        width="100%"
        height="100%"
        playing={play}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              cc_load_policy: 1,
              cc_lang_pref: "pl",
            }
          }
        }}
      />
      
      </div>
    </section>
  )
}