import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Taptotop.css';

const Taptotop = () => {
  const handleTapToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Scroll duration in milliseconds
      smooth: 'easeInOutQuad', // Type of easing function ('easeInOutQuad' provides a smooth scroll)
    });
  };

  return (
    <div className="tap-to-top" onClick={handleTapToTop}>
        <span className="arrow-up">&#8593;</span>
    </div>
  );
};

export default Taptotop;
