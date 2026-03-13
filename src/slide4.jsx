import './slideDefault.css'
import './slide2.css'
import { useState } from 'react';

export default function Slide4() {
  const [activePart, setActivePart] = useState(null);


  return (
    <section>
    <div>
      <h1>Nazewnictwo kwasów karboksylowych</h1>
      <div className="interactive" style={{padding: "0 8vw"}}>

      </div>
      
      
    </div>
    </section>
  )
}


