import './slideDefault.css'
import './slide2.css'



export default function Slide10() {


  return (
    <section>
    <div>
      <div style={{ width:"100vw", height:"95vh",maxHeight:"100vh", alignContent:"center", justifyItems:"center"}}>
        <h3>Zastosowania kwasów karboksylowych w życiu</h3>
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
          width:"30vw"
        }}>
          <i>Tworzywa sztuczne</i> np. soczewki, części aparatów słuchowych czy wypełnienia zębowe
          <div style={{display: "flex", gap:"2vw"}}>
            <img src="soczewka.png" style={{width:"15vw"}}/>
            <img src="cementglasjonomerowy.png" style={{width:"15vw"}}/>
          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"30vw"
        }}>
          <i>Kosmetyki</i> ze względu na działanie przeciwzapalne i antybakteryjne używany w peelingach
          <img src="kwasmlekowy.png" style={{width:"15vw"}}/>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"30vw"
        }}>
          <i>Produkty spożywcze</i> konserwanty takie jak: E 210 (kwas benzoesowy), E 236 (kwas mrówkowy) i E 260 (kwas octowy)
          <br/>
          <img src="kwasMrowkowyE236.png" style={{width:"15vw"}}/>
        </div>
        </div>
      </div>
      
      
    </div>
    </section>
  )
}


