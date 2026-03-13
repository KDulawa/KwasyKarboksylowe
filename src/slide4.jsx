import './slideDefault.css'
import './slide2.css'
import { useState } from 'react';

export default function Slide4() {
  const [atomyWegla, setAtomyWegla] = useState(1)

  const Weglowodory = [
  "Metan","Etan","Propan","Butan","Pentan","Heksan","Heptan","Oktan","Nonan","Dekan",
  "Undekan","Dodekan","Tridekan","Tetradekan","Pentadekan","Heksadekan","Heptadekan","Oktadekan","Nonadekan","Eikozan",
  "Heneikozan","Dokozan","Trikozan","Tetrakozan","Pentakozan","Heksakozan","Heptakozan","Oktakozan","Nonakozan","Triakontan",
  "Hentriakontan","Dotriakontan","Tritriakontan","Tetratriakontan","Pentatriakontan","Heksatriakontan","Heptatriakontan","Oktatriakontan","Nonatriakontan","Tetrakontan",
  "Hentetrakontan","Dotetrakontan","Tritetrakontan","Tetratetrakontan","Pentatetrakontan","Heksatetrakontan","Heptatetrakontan","Oktatetrakontan","Nonatetrakontan","Pentakontan",
  "Henpentakontan","Dopentakontan","Tripentakontan","Tetrapentakontan","Pentapentakontan","Heksapentakontan","Heptapentakontan","Oktapentakontan","Nonapentakontan","Heksakontan",
  "Henheksakontan","Doheksakontan","Triheksakontan","Tetraheksakontan","Pentaheksakontan","Heksaheksakontan","Heptaheksakontan","Oktaheksakontan","Nonaheksakontan","Heptakontan",
  "Henheptakontan","Doheptakontan","Triheptakontan","Tetraheptakontan","Pentaheptakontan","Heksaheptakontan","Heptaheptakontan","Oktaheptakontan","Nonaheptakontan","Oktakontan",
  "Henoktankontan","Dooktakontan","Trioktakontan","Tetraoktakontan","Pentaoktakontan","Heksaoktakontan","Heptaoktakontan","Oktaoktakontan","Nonaoktakontan","Nonakontan",
  "Hennonakontan","Dononakontan","Trinonakontan","Tetranonakontan","Pentanona-kontan","Heksanonakontan","Heptanonakontan","Oktanonakontan","Nonanonakontan","Hektan"
  ];

  return (
    <section>
    <div>
      <div style={{ width:"100vw", height:"95vh",maxHeight:"100vw", alignContent:"center", justifyItems:"center"}}>
        <h1>Nazewnictwo kwasów karboksylowych</h1>
        <h2>"kwas " + alkan + "-owy"</h2>
        <input type="number" value={atomyWegla} onChange={(e) => setAtomyWegla(Number(e.target.value))} style={{width:"20vw", fontSize:"2vw", fontWeight:"bold", backgroundColor:"#8383b3", border:"1vh solid #a3a3f3", textAlign:"center"}}/>
        <h2>{Number.isInteger(atomyWegla) && atomyWegla > 0 && atomyWegla <= 100 ? ("Kwas " + Weglowodory[(atomyWegla-1)%100] + "owy") : "Podaj liczbę węgli (>0 <=100)"}</h2>
      </div>
      
      
    </div>
    </section>
  )
}


