import './slideDefault.css'
import './slide2.css'
import ReactPlayer from "react-player"
import { useState } from 'react'


export default function Slide10() {
  const [play, setPlay] = useState(false)

  return (
    <section>
    <div>
      <div style={{ width:"100vw", height:"95vh",maxHeight:"100vh", alignContent:"center", justifyItems:"center"}}>
        <h3>Produkcja octu</h3>
        <div style={{ 
            display: "flex", 
            justifyContent:"left",
            flexWrap: "wrap",
            gap:"2vw",
            width: "98vw",
            fontSize:"1.5vw"
        }}>
        

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"98vw"
        }}>
          <i style={{marginBottom:"-1vw"}}>(bakterie)</i>
          <b style={{fontSize:"3vw"}}>
          3 CH<sub>3</sub>​CH<sub>2</sub>​OH     +     O<sub>2</sub>​   →   CH<sub>3</sub>​COOH     +     H<sub>2</sub>​O
          </b>
          <br/>
          <div style={{
            display: "flex", 
            justifyContent:"center",
            flexWrap: "wrap",
            gap:"2vw",
            width: "94vw",
            fontSize:"2.5vw",
            marginTop:"-2vw",
            marginLeft:"-4vw"
            }}>
              <div style={{width:"4vw", marginLeft:"10vw"}}>etanol</div>
              <div style={{width:"10vw", marginLeft:"13vw"}}>tlen</div> 
              <div style={{width:"16vw", marginLeft:"2vw"}}>kwas etanowy</div>
              <div style={{width:"8vw", marginLeft:"6vw"}}>woda</div>
            </div>
          <div style={{ 
            display: "flex", 
            justifyContent:"center",
            flexWrap: "wrap",
            gap:"2vw",
            width: "98vw",
            fontSize:"1.5vw"
        }}>
          <img src="kadzieOctu.png" style={{width:"25vw", height:"auto"}}/>
          <ReactPlayer
          src={"https://www.youtube.com/shorts/PRBKrDbU6ro"}
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

        
        </div>
      </div>
      
      
    </div>
    </section>
  )
}


