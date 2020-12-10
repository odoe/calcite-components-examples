import React, { useState, useEffect, useRef } from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {CalciteAvatar, CalciteButton, CalciteIcon, CalciteSlider} from '@esri/calcite-components-react';
import './App.css';

function App() {
  const sliderEl = useRef(null);
  const [sliderValue, setSliderValue] = useState(50);

  // need to access the dom node to set custom event listeners or props that aren't strings / numbers
  // https://stenciljs.com/docs/react#properties-and-events
  return (
    <div className="App">
      <h1>Hello, React</h1>
      <CalciteAvatar fullName="JEBUS MCDUCK" firstName="OK" lastName="HEY" />
      <CalciteButton iconStart="banana">Test</CalciteButton>
      <CalciteIcon icon="banana"/>
      <CalciteSlider
        ref={sliderEl}
        min="1"
        max="100"
        value={sliderValue}
        onCalciteSliderUpdate={(e) => setSliderValue(e.target.value)}
        step="1"/>
      <p>The slider currently has a value of {sliderValue}</p>
    </div>
  );
}

export default App;
