import React from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css'; // Assuming your CSS is in App.css

const ZoomSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <div className="section-to-zoom" ref={ref}>
      <img
        src="your-image.jpg"
        alt="Zoom Image"
        className={`zoom-image ${inView ? 'zoomed' : ''}`}
      />
    </div>
  );
};

export default ZoomSection;
