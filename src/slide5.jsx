import './slideDefault.css'
import './slide2.css'

export default function Slide5() {


  return (
    <section>
    <div>
      <div style={{ width:"100vw", height:"95vh",maxHeight:"100vw", alignContent:"center", justifyItems:"center"}}>
        <h3>Szereg homologiczny alifatycznych nasyconych kwasów monokarboksylowych</h3>
        <table >
        <thead>
            <tr>
                <th rowSpan={2}>Liczba atomów węgla w cząsteczce</th>
                <th colSpan={2}>Nazwa</th>
                <th colSpan={3}>
                  Wzór
                  <br/>
                  (C<sub>n</sub>H<sub>2n+1</sub>COOH)
                </th>
            </tr>
            <tr>
                <th>systematyczna</th>
                <th>zwyczajowa</th>
                <th>
                  sumaryczny
                </th>
                <th  style={{width:"25vw"}}>półstrukturalny</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>kwas metanowy</td>
            <td>kwas mrówkowy</td>
            <td>CH<sub>2</sub>O<sub>2</sub></td>
            <td>H-<b>COOH</b></td>
          </tr>
          <tr>
            <td>2</td>
            <td>kwas etanowy</td>
            <td>kwas octowy</td>
            <td>C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></td>
            <td >CH<sub>3</sub>-<b>COOH</b></td>
          </tr>
          <tr>
            <td>3</td>
            <td>kwas propanowy</td>
            <td>kwas propionowy</td>
            <td>C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></td>
            <td >CH<sub>3</sub>-CH<sub>2</sub>-<b>COOH</b></td>
          </tr>
          <tr>
            <td>4</td>
            <td>kwas butanowy</td>
            <td>kwas masłowy</td>
            <td>C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></td>
            <td >CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-<b>COOH</b></td>
          </tr>
          <tr>
            <td>5</td>
            <td>kwas pentanowy</td>
            <td>kwas walerianowy</td>
            <td>C<sub>5</sub>H<sub>10</sub>O<sub>2</sub></td>
            <td >CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-<b>COOH</b></td>
          </tr>
          <tr>
            <td>6</td>
            <td>kwas heksanowy</td>
            <td>kwas kapronowy</td>
            <td>C<sub>6</sub>H<sub>12</sub>O<sub>2</sub></td>
            <td >CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-<b>COOH</b></td>
          </tr>
        </tbody>
        </table>
      </div>
      
      
    </div>
    </section>
  )
}


