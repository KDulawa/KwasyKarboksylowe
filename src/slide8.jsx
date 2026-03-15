import './slideDefault.css'
import './slide2.css'



export default function slide8() {


  return (
    <section>
    <div>
      <div style={{ width:"100vw", height:"95vh",maxHeight:"100vh", alignContent:"center", justifyItems:"center"}}>
        <h3>Właściwości wybranych kwasów karboksylowych zależnie od ilości atomów węgla</h3>
        <table >
        <thead>
            <tr>
                <th rowSpan={2}>Liczba atomów węgla</th>
                <th rowSpan={2}>Nazwa i wzór</th>
                <th rowSpan={2}>
                  Masa cząsteczkowa, u
                </th>
                <th colSpan={2}>
                  Temperatura
                </th>
                <th rowSpan={2}>
                  Stan skupienia
                </th>
            </tr>
            <tr>
                <th>topnienia, °C</th>
                <th>wrzenia, °C</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              kwas metanowy
              <br/>
              (kwas mrówkowy)
              <br/>
              HCOOH
            </td>
            <td>46</td>
            <td>8,3</td>
            <td>100,7</td>
            <td>ciecz</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              kwas etanowy
              <br/>
              (kwas octowy)
              <br/>
              CH<sub>3</sub>COOH
            </td>
            <td>60</td>
            <td>16,6</td>
            <td>117,9</td>
            <td>ciecz</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              kwas propanowy
              <br/>
              (kwas propionowy)
              <br/>
              CH<sub>3</sub>CH<sub>2</sub>COOH
            </td>
            <td>74</td>
            <td>-20,7</td>
            <td>141,0</td>
            <td>ciecz</td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              kwas undekanowy
              <br/>
              C<sub>10</sub>H<sub>21</sub>COOH
            </td>
            <td>186</td>
            <td>28,5</td>
            <td>284,0</td>
            <td>substancja stała</td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              kwas heksadekanowy
              <br/>
              (kwas palmitynowy)
              <br/>
              C<sub>15</sub>H<sub>31</sub>COOH
            </td>
            <td>256</td>
            <td>62,5</td>
            <td>390,0</td>
            <td>substancja stała</td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              kwas oktadekanowy
              <br/>
              (kwas stearynowy)
              <br/>
              C<sub>17</sub>H<sub>35</sub>COOH
            </td>
            <td>284</td>
            <td>69,3</td>
            <td>360,0</td>
            <td>substancja stała</td>
          </tr>
        </tbody>
        </table>
      </div>
      
      
    </div>
    </section>
  )
}


