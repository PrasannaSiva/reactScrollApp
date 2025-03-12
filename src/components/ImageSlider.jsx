import { useState } from "react";
export default function ImageSlider({imgArr}) {
    const [imgData, setImageData] = useState(imgArr);
    const [index, setIndex] = useState(0);
    function handleSlider(mode) {
        let idx = index;
        if (mode === 'next') {
            idx = (idx + 1 > imgData.length-1) ? imgData.length-1 : idx + 1;
            setIndex(idx);
        } else {
            idx = (idx - 1 <= 0) ? 0 : idx - 1;
            setIndex(idx);
        }
    }
    return (
        <div className="slider-container">
        <div className="slider">
          {index !== 0 && <button className="prev" onClick={ () => {handleSlider('prev')}}>
            &#10094;
          </button>}
          <img src={imgData[index]} alt="slider" className="slider-image" />
          {index < imgData.length - 1 && <button className="next" onClick={ () => {handleSlider('next')}}>
            &#10095;
          </button>}
        </div>
      </div>
    );
}