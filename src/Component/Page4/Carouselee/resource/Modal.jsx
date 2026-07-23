import '../portfolio-sub/Photo.css'; // Im

const Modal = ({ show, onClose, videoSrc, videoRef, isPlaying, togglePlay }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-controls modal-controls">
          <button 
            className="play-pause-btn" 
            onClick={() => togglePlay(videoRef, isPlaying)}
          />
        </div>
        <video
          ref={videoRef}
          className="modal-video"
          onPlay={() => togglePlay(videoRef, true)}
          onPause={() => togglePlay(videoRef, false)}
          controls={false}
          src={videoSrc}
          autoPlay
        />
      </div>
    </div>
  );
};

export default Modal;
