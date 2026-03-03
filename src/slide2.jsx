import './slideDefault.css'
import './slide2.css'
import { useState } from 'react';

export default function Slide2() {
  const [activePart, setActivePart] = useState(null);


  return (
    <section>
    <div>
      <h1>Czym są kwasy karboksylowe?</h1>
      <div className="interactive">Kwasy karboksylowe - <b>jednofunkcyjne pochodne węglowodorów</b>, które zawierają grupę karboksylową o wzorze -COOH, która jest funkcyjna. </div>
      <br/>
      <div style={{ display: "flex", gap: "60px", marginLeft:"160px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            className="interactive"
            onMouseEnter={() => setActivePart("R")}
            onMouseLeave={() => setActivePart(null)}
          >
            R - reszta kwasowa
          </label>

          <label
            className="interactive"
            onMouseEnter={() => setActivePart("COOH")}
            onMouseLeave={() => setActivePart(null)}
          >
            COOH - grupa karboksylowa
          </label>
        </div>

        <div>
          <svg width="460" height="400" viewBox="0 0 470 350">
            
            
            <g
              className={`grupaKarboksylowa ${
                activePart === "COOH" ? "active" : ""
              }`}
              fill="blue"
              fontSize="56"
              textAnchor="middle"
            >
              <g stroke="blue" strokeWidth="6" strokeLinecap="round">
                <line x1="210" y1="110" x2="210" y2="60" />
                <line x1="226" y1="110" x2="226" y2="60" />
                <line x1="250" y1="140" x2="330" y2="180" />
              </g>

              <text x="218" y="50">O</text>
              <text x="220" y="160">C</text>
              <text x="380" y="210">OH</text>
            </g>

            
            <g
              className={`resztaKwasowa ${
                activePart === "R" ? "active" : ""
              }`}
              fill="black"
              fontSize="56"
              textAnchor="middle"
            >
              <g stroke="black" strokeWidth="6" strokeLinecap="round">
                <line x1="190" y1="140" x2="110" y2="180" />
              </g>

              <text x="80" y="210">R</text>
            </g>
          </svg>
        </div>
      </div>
      
    </div>
    </section>
  )
}


