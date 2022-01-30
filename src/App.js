import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => 
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () => 
    setClicks({...clicks, bad: clicks.bad + 1})
  
  const sum = clicks.good + clicks.neutral + clicks.bad

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics </h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
      <p>all {sum} </p>
      <p>average {((clicks.good / 1) + (clicks.neutral * 0) + (clicks.bad / -1)) / sum} </p>
      <p>positive {(clicks.good / sum) * 100}%</p>
      
    </div>
  )
}

export default App