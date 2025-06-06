import { use, useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = ()=>{
    setGood(good+1)
    setAll(all+1)
  }

  
  const handleNetural = ()=>{
    setNeutral(neutral+1)
    setAll(all+1)
  }

  
  const handleBad = ()=>{
    setBad(bad+1)
    setAll(all+1)
  }

  const avg = (good - bad) / all || 0
  const pos = (good / all) * 100 || 0 

  return (
    <div>
      <h1>Give feedback</h1>

      <br>
      </br>

      <button type='submit' onClick={handleGood}>good</button>
      <button type='submit'onClick={handleNetural}>neutral</button>
      <button type='submit'onClick={handleBad}>bad</button>

      <br></br>
      <p>good {good}</p>
      <p>netural {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>avg {avg}</p>
      <p>positive {pos}%</p>


    </div>
  )
}

export default App
