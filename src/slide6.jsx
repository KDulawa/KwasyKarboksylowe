import './slideDefault.css'
import './slide2.css'
import { useState } from 'react';

export default function Slide6() {
  const [activePart, setActivePart] = useState(null);


  return (
    <section>
    <div style={{height:"100vh", alignContent:"center"}}>
      <h3>Izomery kwasów karboksylowych</h3>
      <label style={{fontSize:"1.5vw", textDecoration:"underline"}}>Numerowanie atomów węgla trzeba zacząć od atomu węgla grupy karboksylowej</label>
      <div style={{ 
        display: "flex", 
        justifyContent:"space-between",
        flexWrap: "wrap",
        width: "90vw",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"27vw"
        }}>
          <h4>Szkieletowe</h4>
          <label style={{fontSize:"1.5vw"}}>wzór sumaryczny: C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></label>

          <svg
              viewBox="0 -50 720 700"
              style={{
                width: "20vw",
                height: "auto"
              }}
            >
            <g
              fill="#5ca2ff"
              fontSize="56"
            >
              <text x="27" y="-15" fill="#dae8fc" fontSize="40" style={{fontWeight:"bold"}}>(łańcuch prosty)</text>
              <text x="27" y="50" fill="#dae8fc" style={{fontWeight:"bold"}}>kwas butanowy</text>

              <text x="27" y="150">CH -CH -CH -COOH</text>
              <text x="105" y="165" fontSize="37">3         2         2</text>
              <text x="30" y="105" fontSize="40" fill="#ff4343">4         3        2         1</text>

              <text x="27" y="285" fill="#dae8fc" fontSize="40" style={{fontWeight:"bold"}}>(łańcuch rozgałęziony)</text>
              <text x="27" y="350" fill="#dae8fc" style={{fontWeight:"bold"}}>kwas 2-metylopropanowy</text>

              <text x="27" y="560">CH -CH-COOH</text>
              <text x="105" y="575" fontSize="40">3</text>
              <text x="155" y="450">CH</text>
              <text x="190" y="500">l</text>
              <text x="235" y="470" fontSize="40">3</text>
              <text x="20" y="515" fontSize="40" fill="#ff4343">3           2       1</text>
            </g>
            
          </svg>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"36vw"
        }}>
          <h4>Położenia wiązania podwójnego</h4>
          <br/>
          <svg
              viewBox="0 0 600 600"
              style={{
                width: "20vw",
                height: "auto"
              }}
            >
            <g
              fill="#95e6f5"
              fontSize="56"
            >
              <text x="27" y="50" fill="#dae8fc" style={{fontWeight:"bold"}}>kwas but-2-enowy</text>
              <text x="27" y="150">CH -CH  CH-COOH</text>
              <text x="105" y="165" fontSize="40">3</text>
              <text x="220" y="150" fill="yellow" fontSize="60">=</text>
              <text x="30" y="105" fontSize="40" fill="#ff4343">4         3        2       1</text>


              <text x="27" y="350" fill="#dae8fc" style={{fontWeight:"bold"}}>kwas but-3-enowy</text>
              <text x="27" y="450">CH  CH-CH -COOH</text>
              <text x="107" y="450" fill="yellow" fontSize="60">=</text>
              <text x="318" y="465" fontSize="40">2</text>
              <text x="30" y="405" fontSize="40" fill="#ff4343">4         3       2        1</text>
            </g>
            
          </svg>
            
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw",
          width:"27vw"
        }}>
          <h4>Położenia grupy funkcyjnej</h4>
          <br/>
          <svg
              viewBox="-200 0 700 800"
              style={{
                width: "20vw",
                height: "auto"
              }}
            >
            <g
                fill="#ff4343"
                fontSize="40"
              >
                <text x="-200" y="50" fill="#dae8fc" style={{fontWeight:"bold"}}>kwas benzeno-1,3-dikarboksylowy</text>
                <g stroke="#5ca2ff" strokeWidth="6" strokeLinecap="round">
                  
                  <line x1="60" y1="110" x2="60" y2="160" stroke="yellow"/>
                  <line x1="125" y1="265" x2="180" y2="290" stroke="yellow"/>

                  <line x1="115" y1="260" x2="115" y2="200" />
                  <line x1="115" y1="260" x2="60" y2="290" />
                  <line x1="5" y1="260" x2="60" y2="290" />
                  <line x1="5" y1="260" x2="5" y2="200" />
                  <line x1="5" y1="200" x2="60" y2="170" />
                  <line x1="115" y1="200" x2="60" y2="170" />
                  <circle fill="none" r="45" cx="60" cy="230"/>
                  
                </g>
                <g>
                  <text x="30" y="100" fill="yellow">COOH</text>
                  <text x="190" y="310" fill="yellow">COOH</text>

                  <text x="30" y="160" fill="yellow">1</text>
                  <text x="120" y="200">2</text>
                  <text x="120" y="310" fill="yellow">3</text>
                  <text x="50" y="330">4</text>
                  <text x="-20" y="300">5</text>
                  <text x="-20" y="200">6</text>
                </g>
              </g>
              <g
                fill="#ff4343"
                fontSize="40"
              >
                <text x="-200" y="400" fill="#dae8fc" style={{fontWeight:"bold"}}>kwas benzeno-1,4-dikarboksylowy</text>
                <g stroke="#5ca2ff" strokeWidth="6" strokeLinecap="round">
                  
                  <line x1="60" y1="470" x2="60" y2="520" stroke="yellow"/>
                  <line x1="60" y1="660" x2="60" y2="710" stroke="yellow"/>

                  <line x1="115" y1="620" x2="115" y2="560" />
                  <line x1="115" y1="620" x2="60" y2="650" />
                  <line x1="5" y1="620" x2="60" y2="650" />
                  <line x1="5" y1="620" x2="5" y2="560" />
                  <line x1="5" y1="560" x2="60" y2="530" />
                  <line x1="115" y1="560" x2="60" y2="530" />
                  <circle fill="none" r="45" cx="60" cy="590"/>
                  
                </g>
                <g>
                  <text x="30" y="460" fill="yellow">COOH</text>
                  <text x="50" y="750" fill="yellow">COOH</text>

                  <text x="30" y="520" fill="yellow">1</text>
                  <text x="120" y="560">2</text>
                  <text x="120" y="660">3</text>
                  <text x="30" y="690" fill="yellow">4</text>
                  <text x="-20" y="660">5</text>
                  <text x="-20" y="560">6</text>
                </g>
              </g>
            </svg>
            
        </div>

      </div>
    </div>
    </section>
  )
}


