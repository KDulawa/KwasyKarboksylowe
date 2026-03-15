import './slideDefault.css'
import { useState } from "react"
import ReactPlayer from "react-player"

export default function Slide9() {
  const [play, setPlay] = useState(false)

  return (
    <section style={{width:"100%"}}>
      <h2>Reakcja kwasu etanowego z tlenkiem miedzi(II)</h2>
      <div style={{
        width: "80vw",
        maxWidth: "600px",
        aspectRatio: "16/9",
        alignSelf:"right",
      }}>
        <div style={{width:"100vw", textAlign:"center", margin:"0vw 0vw 2vw -5vw"}}>
          <b>
          2 CH<sub>3</sub>​CO​OH + 2 CuO → (CH<sub>3</sub>​COO)<sub>2</sub>Cu + H<sub>2</sub>​O
          </b>
          <br/>
          <div style={{
            display: "flex", 
            justifyContent:"left",
            flexWrap: "wrap",
            gap:"2vw",
            width: "94vw",
            fontSize:"1.5vw"
            }}>
              <div style={{width:"10vw", marginLeft:"30vw"}}>kwas etanowy</div>
              <div style={{width:"10vw", marginLeft:"0vw"}}>tlenek miedzi(II)</div> 
              <div style={{width:"8vw", marginLeft:"0vw"}}>etanian miedzi(II)</div>
              <div style={{width:"8vw", marginLeft:"1vw"}}>woda</div>
            </div>
        </div>
        <div style={{justifyItems:"center",aspectRatio: "16/9",height:"50vh", width:"100vw", margin:"0vw 0vw 0vw -5vw"}}>
        <ReactPlayer
          src={"https://www.youtube.com/watch?v=L_BMzDWbVOw"}
          style={{aspectRatio: "16/9", height:"100%", width:"50%"}}
          volume={0.2}
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