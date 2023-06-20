import React, { useState } from "react";

function App() {
  const [temperatureVal, setTempertaureVal] = useState(60);
  const [temperatureColor, setTemperatureColor] = useState('cold')

  const handleAddButton = () => {
    const newTemperature = temperatureVal + 1

    if (newTemperature >= 65) {
      setTemperatureColor('hot')
    }

    if (newTemperature === 86) return

    setTempertaureVal(newTemperature)
  }

  const handleSubtractButton = () => {
    const newTemperature = temperatureVal - 1

    if (newTemperature < 65) {
      setTemperatureColor('cold')
    }

    if (newTemperature === 49) return

    setTempertaureVal(newTemperature)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureVal}°
        </div>
      </div>
        <div className="button-container">
          <button onClick={handleAddButton}>+</button>
          <button onClick={handleSubtractButton}>-</button>
        </div>
    </div>
  );
}

export default App;
