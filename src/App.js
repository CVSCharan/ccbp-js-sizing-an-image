import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState(200);

  const decrementButton = () => {
    setSize(size - 5);
  };

  const incrementButton = () => {
    setSize(size + 5);
  };

  const imgSize = size + "px";
  console.log(imgSize);

  return (
    <div className="bg-container pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 d-flex flex-column justify-content-center text-center text-md-left">
            <h1 className="sizing-an-image-heading">Sizing an Image</h1>
            <p className="sizing-an-image-description">
              Increase the width of an image by clicking the plus button and
              decrease by clicking the Minus button. For every action, the image
              increases or decreases by 5px.
            </p>
          </div>
          <div className="img-container col-12 col-md-12 text-center">
            <p id="warningMessage" className="warning-message"></p>
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sizing-an-image-img.png"
              alt="img"
              id="image"
              style={{ height: `${imgSize}`, width: `${imgSize}` }}
            />
            <p className="image-width">
              Width: <span id="imageWidth">{size} px</span>
            </p>
          </div>
          <div className="col-12 col-md-12">
            <div className="buttons-container d-flex flex-row shadow m-auto">
              <button
                className="button"
                id="decrementButton"
                onClick={decrementButton}
              >
                -
              </button>
              <hr className="hr-line" />
              <span className="width-in-px">5px</span>
              <hr className="hr-line" />
              <button
                className="button"
                id="incrementButton"
                onClick={incrementButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
