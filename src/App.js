import React, { useState } from 'react';
import './App.css';

function App() {
  const [envelopeHovered, setEnvelopeHovered] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [clickEntines, setClickEntines] = useState(false);

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
    setInterval(createText, 25); // Adjust the interval as needed
  };  

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
      </div>
      <div className="shadow"></div>
    </div>
    <div>
      {clickEntines && (
      <React.Fragment>
        <div className="question">Will you be my<br/>Valentine?</div>
        <button className='yes'>Yes</button>
        <button className='no'>No</button>
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
