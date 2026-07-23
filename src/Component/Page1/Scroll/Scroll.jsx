import { useRef, useState, useEffect } from 'react';
import './Scroll.css'
import '../Home/Home.css';
import ipad from '../../../images/ipad.svg';
import vid from '../../../vedios/ld-video2.mp4';
import bg1 from '../../../images/bg-text1.svg'


const Scroll = () => {
    const [scrollY, setScrollY] = useState(0);// Track play/pause state
    const ipadContRef = useRef(null);
    const videoRef = useRef(null); // Reference to the video element
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleScroll = () => {
        const scrollPos = window.scrollY;
        setScrollY(scrollPos);

        // Adjust the movement speed of the image
        const movement = scrollPos * 0.2; // Adjust this factor as needed

        // Update the transform property to move the image up
        if (ipadContRef.current) {
            ipadContRef.current.style.transform = `translateY(-${movement}px)`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='section2'>
            <div className='ipad-cont' ref={ipadContRef} >
                <img className='ipad' src={ipad} alt="iPad" />
                <div className='vid-cont'>
                    <video ref={videoRef} className='land-vid' src={vid} loop onClick={handlePlayPause}></video>
                    {!isPlaying && (
                        <div className="play-button" onClick={handlePlayPause}></div>
                    )}
                </div>
            </div>
            <div className='bg-half'>
                <img className='bg-txt11' src={bg1} alt="" />
            </div>
        </div>
    );
};

export default Scroll;
