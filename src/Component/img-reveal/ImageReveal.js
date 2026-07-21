import React, { useEffect, useRef, useState } from 'react';
import './reveal.css';
import '../Page1/Home/Home.css';
import flow from '../../images/flow.svg';
import flow2 from '../../images/flow2.svg';

const ImageReveal1 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const isVisible = (
                    rect.top <= window.innerHeight &&
                    rect.bottom >= 0
                );
                console.log('isVisible:', isVisible); // Debugging
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flow-head'>
            <img
                className={`flow-chart flow-desk ${isVisible ? 'reveal' : ''}`}
                src={flow} // Ensure src is correct
                alt="Flow chart"
                ref={imageRef} // Ref for visibility checking
            />
            <img  className={`flow-chart flow-mob ${isVisible ? 'reveal' : ''}`} src={flow2} alt="Flow chart mobile"   />
            <div className={`flow-text1  ${isVisible ? 'reveal' : ''}`}>
                <h4>Planning</h4>
                <p>Based on your goals and target audience, we develop a comprehensive marketing plan that outlines the best digital marketing tactics for your business.</p>
            </div>
            <div className={`flow-text2  ${isVisible ? 'reveal' : ''}`}>
                <h4>Creation</h4>
                <p>Our team of experts create high-quality digital assets that resonate with your audience.</p>
            </div>
            <div className={`flow-text3  ${isVisible ? 'reveal' : ''}`}>
                <h4>Execution</h4>
                <p>With a robust strategy, we execute your digital marketing initiatives with precision and effectiveness.</p>
            </div>
            <div className={`flow-text4  ${isVisible ? 'reveal' : ''}`}>
                <h4>Analysis</h4>
                <p>We meticulously analyze the performance of your campaigns across all channels, using advanced analytics tools to extract actionable insights.</p>
            </div>
            <div className={`flow-text5  ${isVisible ? 'reveal' : ''}`}>
                <h4>Reporting</h4>
                <p>We provide clear, concise reports that highlight successes, challenges, and opportunities for improvement.</p>
            </div>
        </div>
    );
};

export default ImageReveal1;
