import './slideDefault.css'
import './slide2.css'
import { useState } from 'react';

export default function Slide6() {
  const [activePart, setActivePart] = useState(null);


  return (
    <section>
    <div style={{height:"100vh", alignContent:"center"}}>
      <h2>Właściwości kwasów karboksylowych</h2>
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
        <h3>Właściwości fizyczne</h3>
        <ul style={{textAlign:"left"}}>
        <li>bezbarwne (większość jest bezbarwna)</li>
        <li>ostry, charakterystyczny zapach (np. jak ocet)</li>
        <li>niższe kwasy są dobrze rozpuszczalne w wodzie</li>
        <li>moc kwasu i rozpuszczalność maleje wraz ze wzrostem liczby atomów węgla</li>
        <li>wysokie temperatury wrzenia (wyższe niż alkany o podobnej masie)</li>
        <li>kwasy z atomami węgla od 1 do 10 są cieczami, a 11 i więcej atomów węgla ciałami stałymi</li>
        </ul>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"30vw"
        }}>
        <h3>Właściwości chemiczne</h3>
        <ul style={{textAlign:"left"}}>
        <li>mają odczyn kwasowy</li>
        <li>reagują z metalami aktywnymi - powstaje sól i wodór</li>
        <li>reagują z zasadami - powstaje sól i woda</li>
        <li>reagują z tlenkami metali - powstaje sól i woda</li>
        <li>reagują z węglanami i wodorowęglanami - powstaje sól, woda i CO<sub>2</sub></li>
        <li>ulegają estryfikacji z alkoholami - powstają estry i woda</li>
        <li>ulegają spalaniu</li>
        </ul>
      </div>
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"30vw"
        }}>
            <img src="kwasMrowkowy.png" width="80%" height="auto"></img>
        </div>
      </div>
    </div>
    </section>
  )
}


