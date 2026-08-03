import { useRef, useState, useEffect } from "react";
import '../portfolio-sub/Pay-per.css';
import goodhome from '../../../../vedios/Good Homes.mp4';
import per1 from '../../../../images/Good Homes.webp';
import perL1 from '../../../../images/GoodHomeLogo.webp';
import thumbnail from '../../../../images/GoodHomeThumb.webp'

const GoodHomes = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    
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
              src={goodhome}
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
            GoodLook Home Decor provides premium mosquito mesh systems, security mesh doors, and uPVC window solutions designed for modern homes. Through our targeted Meta lead generation campaign, we reached homeowners actively searching for home improvement solutions, generating qualified leads while maintaining cost efficient campaign performance.
          </p>
          <div className="pay-sub">
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">50,586+</h3>
              <h6 className="pay-sub-p">Reaches</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">₹90.33</h3>
              <h6 className="pay-sub-p"> Cost Per Result</h6>
            </div>
            <div className="pay-sub-box">
              <h3 className="pay-sub-head">170+</h3>
              <h6 className="pay-sub-p"> Meta Leads</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodHomes;
