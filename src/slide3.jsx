import './slideDefault.css'
import './slide2.css'
import { useState } from 'react';

export default function Slide3() {
  const [activePart, setActivePart] = useState(null);


  return (
    <section>
    <div style={{height:"100vh"}}>
      <h3>Budowa cząsteczek kwasów karboksylowych</h3>
      <div style={{ 
        display: "flex", 
        justifyContent:"space-between",
        flexWrap: "wrap",
        width: "90vw",
        height:"100vh"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw"
        }}>
          <h4>Alifatycznych</h4>
          <label
            className="interactive"
            onMouseEnter={() => setActivePart("R1")}
            onMouseLeave={() => setActivePart(null)}
          >
            - grupa alkilowa
          </label>

          <label
            className="interactive"
            onMouseEnter={() => setActivePart("COOH1")}
            onMouseLeave={() => setActivePart(null)}
          >
            - grupa karboksylowa
          </label>
          <label style={{fontSize:"1.5vw"}}>(jako przykład poniżej kwas octowy)</label>
          <svg
            viewBox="0 0 470 350"
            style={{
              width: "20vw",
              height: "auto"
            }}
          >
            
            <g
              className={`grupaKarboksylowa ${
                activePart === "COOH1" ? "active" : ""
              }`}
              fill="blue"
              fontSize="56"
              textAnchor="middle"
            >
              <g stroke="blue" strokeWidth="6" strokeLinecap="round">
                <line x1="300" y1="120" x2="240" y2="160" />
                <line x1="310" y1="130" x2="250" y2="170" />
                <line x1="250" y1="195" x2="310" y2="225" />
              </g>

              <text x="330" y="130">O</text>
              <text x="220" y="205">C</text>
              <text x="360" y="250">OH</text>
            </g>

            <line x1="190" y1="190" x2="110" y2="190" stroke="black" strokeWidth="6" strokeLinecap="round"/>

            <g
              className={`resztaKwasowa ${
                activePart === "R1" ? "active" : ""
              }`}
              fill="#fff434"
              fontSize="56"
              textAnchor="middle"
            >

              <text x="50" y="210">CH</text>
              <text x="100" y="220" fontSize="30">3</text>
            </g>
          </svg>
          <h5 style={{width:"40vw"}}>
            Wyjątkiem jest kwas mrówkowy, który nie posiada grupy alkilowej – zamiast niej występuje atom wodoru (H&#8209;COOH).
          </h5>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1vw"
        }}>
          <h4>Aromatycznych</h4>
          <label
            className="interactive"
            onMouseEnter={() => setActivePart("R2")}
            onMouseLeave={() => setActivePart(null)}
          >
            - grupa arylowa
          </label>
          <label
            className="interactive"
            onMouseEnter={() => setActivePart("COOH2")}
            onMouseLeave={() => setActivePart(null)}
          >
            - grupa karboksylowa
          </label>
          <label style={{fontSize:"1.5vw"}}>(jako przykład poniżej kwas benzenokarboksylowy)</label>
            <svg
              viewBox="0 0 470 360"
              style={{
                width: "20vw",
                height: "auto"
              }}
            >
          
          
              <g
                className={`grupaKarboksylowa ${
                  activePart === "COOH2" ? "active" : ""
                }`}
                fill="blue"
                fontSize="56"
                textAnchor="middle"
              >
                <g stroke="blue" strokeWidth="6" strokeLinecap="round">
                  <line x1="140" y1="60" x2="80" y2="100" />
                  <line x1="150" y1="70" x2="90" y2="110" />
                  <line x1="90" y1="135" x2="150" y2="165" />
                </g>
                <text x="170" y="70">O</text>
                <text x="60" y="145">C</text>
                <text x="200" y="190">OH</text>
              </g>
              
              <line x1="60" y1="160" x2="60" y2="220" stroke="black" strokeWidth="6" strokeLinecap="round"/>

              <g
                className={`resztaKwasowa ${
                  activePart === "R2" ? "active" : ""
                }`}
                fill="#fff434"
                fontSize="56"
                textAnchor="middle"
              >
                
                <g stroke="#fff434" strokeWidth="6" strokeLinecap="round">
                  
                  
                  <line x1="115" y1="320" x2="115" y2="260" />
                  <line x1="115" y1="320" x2="60" y2="350" />
                  <line x1="5" y1="320" x2="60" y2="350" />
                  <line x1="5" y1="320" x2="5" y2="260" />
                  <line x1="5" y1="260" x2="60" y2="230" />
                  <line x1="115" y1="260" x2="60" y2="230" />
                  <circle fill="none" r="45" cx="60" cy="290"/>
                  
                </g>
              </g>
            </svg>
            
        </div>
      </div>
    </div>
    </section>
  )
}


