import './slideDefault.css'
import { useState } from "react"
import ReactPlayer from "react-player"

export default function Slide9() {
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
          <br/>
          <div style={{
            display: "flex", 
            justifyContent:"left",
            flexWrap: "wrap",
            gap:"2vw",
            width: "94vw",
            fontSize:"1.5vw"
            }}>
              <div style={{width:"4vw", marginLeft:"15vw"}}>etanol</div>
              <div style={{width:"10vw", marginLeft:"3vw"}}>dichromian(VI) potasu</div> 
              <div style={{width:"8vw", marginLeft:"0vw"}}>kwas siarkowy(VI)</div>
              <div style={{width:"8vw", marginLeft:"3vw"}}>kwas etanowy</div>
              <div style={{width:"8vw", marginLeft:"3vw"}}>siarczan(VI) chromu(III)</div>
              <div style={{width:"8vw", marginLeft:"1vw"}}>siarczan(VI) potasu</div>
              <div style={{width:"8vw", marginLeft:"0vw"}}>woda</div>
            </div>
        </div>
        <div style={{ 
            display: "flex", 
            justifyContent:"left",
            flexWrap: "wrap",
            gap:"2vw",
            width: "94vw",
            fontSize:"1.5vw"
        }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"40vw",
          height:"50vh"
        }}>
          <br/>
        <ReactPlayer
          src={"https://www.youtube.com/watch?v=vcm7T32KqfU&hl=pl"}
          style={{aspectRatio: "16/9", height:"100%", width:"100%"}}
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
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"40vw"
        }}>
        (bardziej profesjonalne z innym utleniaczem)
        <ReactPlayer
          src={"https://www.youtube.com/shorts/pVGW9EXZHjg"}
          style={{aspectRatio: "16/9", height:"100%", width:"100%"}}
          volume={0.1}
          controls
          
          playing={play}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                cc_load_policy: 1,
                cc_lang_pref: "pl",
              }
            }
          }}
        />
        </div>
        </div>
      </div>
    </section>
  )
}