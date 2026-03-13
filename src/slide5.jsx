import './slideDefault.css'
import { useState } from "react"
import ReactPlayer from "react-player"

export default function Slide5() {
  const [play, setPlay] = useState(false)

  return (
    <section style={{width:"100%"}}>
      <h2>Otrzymywanie kwasów karboksylowych</h2>
      <div style={{
        width: "80vw",
        maxWidth: "600px",
        aspectRatio: "16/9",
        alignSelf:"right",
      }}>
        <div style={{width:"100vw", textAlign:"center", margin:"0vw 0vw 2vw -5vw"}}>
        <b>
        3 CH<sub>3</sub>​CH<sub>2</sub>​OH + 2 K<sub>2</sub>​Cr<sub>2</sub>​O<sub>7</sub> ​+ 8 H<sub>2</sub>​SO<sub>4</sub>​ → 3 CH<sub>3</sub>​COOH + 2 Cr<sub>2</sub>​(SO<sub>4</sub>​)<sub>3</sub> ​+  2 K<sub>2</sub>​SO<sub>4</sub> ​+ 11 H<sub>2</sub>​O
        </b>
        </div>
        <div style={{justifyItems:"center",aspectRatio: "16/9",height:"50vh", width:"100vw", margin:"0vw 0vw 0vw -5vw"}}>
        <ReactPlayer
          src={"https://www.youtube.com/watch?v=vcm7T32KqfU&hl=pl"}
          style={{aspectRatio: "16/9", height:"100%", width:"50%"}}
          volume={1}
          controls

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
      </div>
    </section>
  )
}