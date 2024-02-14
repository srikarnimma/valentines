import React, { useState } from 'react';
import './App.css';

function App() {
  const [envelopeHovered, setEnvelopeHovered] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [clickEntines, setClickEntines] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '36%', left: '52%' }); // Initial position of the "No" button
  const [noButtonSize, setNoButtonSize] = useState({height: '4.5%', width: '4%'}); // Initial size of the "No" button
  const [noButtonFont, setNoButtonFont] = useState(32);
  const [yesEntines, setYesEntines] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility


  const handleEnvelopeHover = () => {
    setEnvelopeHovered(true);
    setHoverCount(prevCount => prevCount + 1);

    // Add the class to trigger the animation
    document.querySelector('.card').classList.remove('down');
    document.querySelector('.card').classList.add('shifted');
  };

  const handleEnvelopeLeave = () => {
    setEnvelopeHovered(false);
    setHoverCount(prevCount => prevCount - 1);

    // Remove the class to reset the animation
    document.querySelector('.card').classList.remove('shifted');
    document.querySelector('.card').classList.add('down');
  };

  const handleHeartClick = () => {
    setClickEntines(true);

    // Add the class to trigger animation
    document.querySelector('.container').classList.add('bye');
    setTimeout(() => {
      const intervalId = setInterval(createText, 25); 
      setTimeout(() => {
        clearInterval(intervalId); // Stop the interval after 21 seconds
      }, 21000); 
    }, 2000);
  };  

  const handleNoButtonClick = () => {
    // Update the position of the "No" button randomly within predefined bounds
    const newTop = Math.random() * (80-20) + 20 + '%'; // Random top position between 10% and 70%
    const newLeft = Math.random() * (60-40) + 35 + '%'; // Random left position between 10% and 90%
    setNoButtonPosition({ top: newTop, left: newLeft });
    
    const newHeight = noButtonSize.height * 0.8;
    const newWidth = noButtonSize.width * 0.8;
    setNoButtonSize({newHeight, newWidth}); // Reduce the size by 20%

    setNoButtonFont(prevSize => prevSize - 5);
  };

  const handleYesButtonClick = () => {
    setYesEntines(true);

    // animation triggers
    document.querySelector('.yes').classList.add('yesEntines');
    document.querySelector('.no').classList.add('yesEntines');
    document.querySelector('.question').classList.add('yesEntines');

    setTimeout(() => {
      document.querySelector('.container').classList.add('yesEntines');
      const container = document.getElementById('textContainer');
      container.innerHTML = ''; // Remove all child elements
    }, 500);

    setTimeout(() => {
      document.querySelector('.container').classList.add('vidTime');
      const container = document.getElementById('textContainer');
      container.innerHTML = ''; // Remove all child elements
      setShowVideo(true)
    }, 8200);
  }


  //todo: if hit no 5 times then "you really do want me to die"

  return (
    <div>
    <div className="container">
      <div className={`valentines ${envelopeHovered ? 'hovered' : ''}`} onMouseEnter={handleEnvelopeHover} onMouseLeave={handleEnvelopeLeave}>
        <div className="envelope" onMouseEnter={handleEnvelopeHover} onMouseLeave={handleEnvelopeLeave}></div>
        <div className="front" onMouseEnter={handleEnvelopeHover} onMouseLeave={handleEnvelopeLeave} onClick={handleHeartClick}></div>
        <div className="card" onMouseEnter={handleEnvelopeHover} onMouseLeave={handleEnvelopeLeave} onClick={handleHeartClick}>
          <div className="text" onClick={handleHeartClick}>Happy<br/>Valentine's<br/>Day Bujji!</div>
          <div className="heart" onClick={handleHeartClick}></div>
          <div className="click" onClick={handleHeartClick}>Click</div>
        </div>
        <div className="hearts" onMouseEnter={handleEnvelopeHover}>
          <div className="one" onMouseEnter={handleEnvelopeHover}></div>
          <div className="two" onMouseEnter={handleEnvelopeHover}></div>
          <div className="three" onMouseEnter={handleEnvelopeHover}></div>
          <div className="four" onMouseEnter={handleEnvelopeHover}></div>
          <div className="five" onMouseEnter={handleEnvelopeHover}></div>
        </div>
        <div>
          {yesEntines && (
          <React.Fragment>
            <div class="countdown">
              <div className="uno">1</div>
              <div className="dos">2</div>
              <div className="tres">3</div>
              <div className="cuatro">4</div>
              <div className="cinco">5</div>
            </div>
          </React.Fragment>
          )}
        </div>
      </div>
      <div className="shadow"></div>
    </div>
    <div>
      {showVideo && (
      <React.Fragment>
        <video id="myVideo" className='video' width="1200" height="1000" controls>
          <source src="movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='Update'>IMPORTANT: you must check Alexia's closet</div>
      </React.Fragment>
      )}
    </div>
    <div>
      {clickEntines && (
      <React.Fragment>
        <div className="question">Will you be my<br/>Valentine?</div>
        <button className='yes'onClick={handleYesButtonClick} >Yes</button>
        <button className='no' onClick={handleNoButtonClick} style={{ top: noButtonPosition.top, left: noButtonPosition.left, width: noButtonSize.width, height: noButtonSize.height, fontSize: `${noButtonFont}px` }}>No</button>
      </React.Fragment>
      )}
    </div>
    <div>
      {yesEntines && (
      <React.Fragment>
        <div class="sub-background"></div>
      </React.Fragment>
      )}
    </div>
    <p className="hover-count">Hover Count: {hoverCount}, clickEntines: {clickEntines===true ? "yes" : "no"}</p>
    <div class="empty-box"></div>
    <div id="textContainer"></div>
    </div>
  );
}

function createText() {
  const container = document.getElementById('textContainer');
  const textElement = document.createElement('div');
  textElement.textContent = 'Say yes!';
  textElement.classList.add('text');

  // Position the text element
  textElement.style.position = 'absolute';
  textElement.style.left = `${(container.children.length%20) * 92 - 40}px`; 
  textElement.style.top = `${Math.floor(container.children.length / 20) * 24}px`; 
  textElement.style.width = `140px`;
  textElement.style.color = 430000;
  textElement.style.opacity = 0.6;
  textElement.style.zIndex = -2;

  // Append the text element to the container
  container.style.overflow = 'hidden';
  container.appendChild(textElement);
}


export default App;
