import { useRef, useState, useEffect } from "react";
import '../portfolio-sub/Pay-per.css';
import swsthik from '../../../../vedios/swsthik.mp4';
import per1 from '../../../../images/per-1.webp';
import perL1 from '../../../../images/per-l1.webp';
import thumbnail from '../../../../images/thumb1.webp'

const Swasthik = () => {
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
      <div className="row pay-per-main">
        <div className="col-12 col-sm-6 pay-per-img-head">
          <img className="pay-per-img" src={per1} alt="per1" />
          <div className={`video-container ${isPlaying ? 'playing' : 'paused'}`}>
            <video
              ref={videoRef}
              className="pay-per-video"
              src={swsthik}
              poster={thumbnail} // Set the thumbnail as the poster
              onClick={togglePlayPause} // Video click also triggers play/pause
            />
            <div className="video-controls">
              <button className="play-pause-btn" onClick={togglePlayPause}></button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 pay-text-col">
          <img className="pay-per-logo" src={perL1} alt="perL1" />
          <h3 className="pay-per-head">Engagement Ad</h3>
          <p className="pay-per-para">
            Swasthik Architects, a leading architectural firm, aimed to increase qualified leads. Our PPC campaign focused on generating high-quality leads by targeting potential clients actively seeking architectural services.
          </p>
          <div className="pay-sub">
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">30,000+</h3>
              <h6 className="pay-sub-p">Reaches</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">45,000+</h3>
              <h6 className="pay-sub-p">Impressions</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">30+</h3>
              <h6 className="pay-sub-p"> Results</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swasthik;
