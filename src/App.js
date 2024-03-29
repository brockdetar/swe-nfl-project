
import './App.css';
import Sidebar from './Components/Sidebar';
import image from '../src/NFL Project Background.jpeg'
import { SliderData } from './Components/SliderData';
import ImageSliderLeft from './Components/ImageSlider';
import ImageSliderRight from './Components/ImageSlider';
import Predictor from './Components/ImageSlider';


function App() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      Predictor(); // call Predictor function on Enter key press
      if (Predictor.leftOVR > Predictor.rightOVR) {
        console.log("Left Team Wins")
    } 
    else if (Predictor.leftOVR < Predictor.rightOVR) {
        console.log("Right Team Wins")
    }
    }
  });
  return (  
      <div class="bg">
        <div class="centerBox">
          <div class="teamText">
            Select Two Teams to Compare Statistics
          </div>
          <div class='teamSelectBox'>
            <div class="teamSelect">
              <ImageSliderLeft slides={SliderData}/>
            </div>
            <div class="middleBox">vs</div>
            <div class="teamSelectRight">
              <ImageSliderRight slides={SliderData}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;