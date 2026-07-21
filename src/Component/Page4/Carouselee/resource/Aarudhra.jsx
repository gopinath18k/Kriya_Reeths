import React, { useRef, useState, useEffect } from "react";
import '../portfolio-sub/Pay-per.css';
import aarudhra from '../../../../vedios/Aarudhra.mp4';
import per1 from '../../../../images/per-1.png';
import crown from '../../../../images/crown.png';
import thumbnail from '../../../../images/vesat.png'; // Import your thumbnail image

const Aarudhra = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Event listener for fullscreen change
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        exitFullscreen();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const togglePlayPause = () => {
    if (!isPlaying) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
      
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const exitFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <div className="row pay-per-main pay-vid-pd pb-5">
        <div className="col-12 col-sm-6 pay-per-img-head">
          <img className="pay-per-img" src={per1} alt="per1" />
          <div className={`video-container ${isPlaying ? 'playing' : 'paused'}`}>
            <video
              ref={videoRef}
              className="pay-per-video"
              src={aarudhra}
              poster={thumbnail} // Set the thumbnail as the poster
              onClick={togglePlayPause} // Video click also triggers play/pause
            />
            <div className="video-controls">
              <button className="play-pause-btn" onClick={togglePlayPause}></button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 pay-text-col">
          <img className="pay-per-logo" src={crown} alt="perL1" />
          <h3 className="pay-per-head">Engagement Ad</h3>
          <p className="pay-per-para">
          Aarudhra Enterprises is a leader in manufacturing automatic oil maker machines for efficient and natural oil extraction. Our digital marketing efforts have successfully enhanced their presence, driving higher engagement and generating leads that convert.


          </p>
          <div className="pay-sub">
            <div className="pay-sub-box">
              <h3 className="pay-sub-head"> 15,179</h3>
              <h6 className="pay-sub-p">Reaches</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">₹6.40</h3>
              <h6 className="pay-sub-p">CPC</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head"> 117</h3>
              <h6 className="pay-sub-p"> Leads</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aarudhra;
