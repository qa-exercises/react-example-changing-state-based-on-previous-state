import './style.css'
import React, { useState } from 'react'

export default function App() {
  const [temperature, setTemperature] = useState(20)

  function resetTemeprature() {
    setTemperature(20)
  }

  function increaseTemperature() {
    setTemperature((previous) => previous + 1)
  }

  function decreaseTemperature() {
    setTemperature((previous) => previous - 1)
  }

  return (
    <main>
      <h1>🌡️ React Thermostat</h1>
      <h2>{temperature}°C</h2>
      <div>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
      <button onClick={resetTemeprature} className="reset">
        Reset
      </button>
    </main>
  )
}
