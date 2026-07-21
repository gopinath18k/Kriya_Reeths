import React, { useRef, useState, useEffect } from "react";
import '../portfolio-sub/Pay-per.css';
import vesat from '../../../../vedios/vesat.mp4';
import per1 from '../../../../images/per-1.png';
import vesatsolar from '../../../../images/vesat-solar-log.png';
import thumbnail from '../../../../images/vesat-thumb.png'; // Import your thumbnail image

const Vesat = () => {
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
      <div className="row pay-per-main pay-vid-pd">
        <div className="col-12 col-sm-6 pay-per-img-head">
          <img className="pay-per-img" src={per1} alt="per1" />
          <div className={`video-container ${isPlaying ? 'playing' : 'paused'}`}>
            <video
              ref={videoRef}
              className="pay-per-video"
              src={vesat}
              poster={thumbnail} // Set the thumbnail as the poster
              onClick={togglePlayPause} // Video click also triggers play/pause
            />
            <div className="video-controls">
              <button className="play-pause-btn" onClick={togglePlayPause}></button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 pay-text-col">
          <img className="pay-per-logo" src={vesatsolar} alt="perL1" />
          <h3 className="pay-per-head">Engagement Ad</h3>
          <p className="pay-per-para">
          Vesat Solar specializes in offering efficient, sustainable solar energy solutions, including installation and maintenance, to help businesses and homes transition to cleaner, renewable energy sources, while our social media agency has generated strong leads to connect them with potential customers.

          </p>
          <div className="pay-sub">
            <div className="pay-sub-box">
              <h3 className="pay-sub-head"> 130,916</h3>
              <h6 className="pay-sub-p">Reaches</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">₹3.23 </h3>
              <h6 className="pay-sub-p">CPC</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head"> 2378</h3>
              <h6 className="pay-sub-p"> Leads</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vesat;
