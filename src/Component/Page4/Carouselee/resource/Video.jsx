import { useRef, useState, useEffect } from 'react';
import texvid from '../../../../vedios/tex.mp4';
import mahvid from '../../../../vedios/maha.mp4';
import sw from '../../../../vedios/sw.mp4';
import mg2 from '../../../../vedios/mg2.mp4';
import alli from '../../../../vedios/alli.mp4';
import mahav from '../../../../vedios/mahav.mp4';
import osho from '../../../../vedios/osho.mp4';
import disha from '../../../../vedios/disha.mp4';
import gem from '../../../../vedios/Gem.mp4';
import cosmo from '../../../../vedios/Cosmo.mp4';
import sand from '../../../../vedios/sand.mp4';
import vesats from '../../../../vedios/vesats.mp4';
import kd1 from '../../../../vedios/KD-(1).mp4';
import kd2 from '../../../../vedios/KD-(2).mp4';
import suman1 from '../../../../vedios/SUMAN- (1).mp4';
import suman2 from '../../../../vedios/SUMAN- (2).mp4';
import ga1 from '../../../../vedios/GA-1.mp4';
import '../portfolio-sub/Photo.css'; // Import the CSS file

const Videos = () => {
  const texVidRef = useRef(null);
  const mahVidRef = useRef(null);
  const swRef = useRef(null);
  const mg2Ref = useRef(null);
  const alliRef = useRef(null);
  const mahavRef = useRef(null);
  const oshoRef = useRef(null);
  const dishaRef = useRef(null);
  const gemRef = useRef(null);
  const cosmoRef = useRef(null);
  const sandRef = useRef(null);
  const vesatsRef = useRef(null);
  const kd1Ref = useRef(null);
  const kd2Ref = useRef(null);
  const suman1Ref = useRef(null);
  const suman2Ref = useRef(null);
  const ga1Ref = useRef(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const [texPlaying, setTexPlaying] = useState(false);
  const [mahPlaying, setMahPlaying] = useState(false);
  const [swPlaying, setSwPlaying] = useState(false);
  const [mg2Playing, setMg2Playing] = useState(false);
  const [alliPlaying, setAlliPlaying] = useState(false);
  const [mahavPlaying, setMahavPlaying] = useState(false);
  const [oshoPlaying, setOshoPlaying] = useState(false);
  const [dishaPlaying, setDishaPlaying] = useState(false);
  const [gemPlaying, setGemPlaying] = useState(false);
  const [cosmoPlaying, setCosmoPlaying] = useState(false);
  const [sandPlaying, setSandPlaying] = useState(false);
  const [vesatsPlaying, setVesatsPlaying] = useState(false);
  const [kd1Playing, setKd1Playing] = useState(false);
  const [kd2Playing, setKd2Playing] = useState(false);
  const [suman1Playing, setSuman1Playing] = useState(false);
  const [suman2Playing, setSuman2Playing] = useState(false);
  const [ga1Playing, setGa1Playing] = useState(false);

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

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, [currentVideo]);

  const handleVideoEnd = (videoRef, setPlaying) => {
    setPlaying(false);
    videoRef.current.currentTime = 0;
  };

  const handleFullscreen = (videoRef, setPlaying) => {
    setCurrentVideo(videoRef.current);
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
    videoRef.current.play();
    setPlaying(true);
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (currentVideo) {
      currentVideo.pause(); // Pause the video
      currentVideo.currentTime = 0; // Reset video to start
      setPlayingState(currentVideo, false);
    }
    setIsFullscreen(false);
    setCurrentVideo(null);
  };

  const setPlayingState = (videoRef, isPlaying) => {
    if (videoRef === texVidRef.current) {
      setTexPlaying(isPlaying);
    } else if (videoRef === mahVidRef.current) {
      setMahPlaying(isPlaying);
    } else if (videoRef === swRef.current) {
      setSwPlaying(isPlaying);
    } else if (videoRef === mg2Ref.current) {
      setMg2Playing(isPlaying);
    } else if (videoRef === alliRef.current) {
      setAlliPlaying(isPlaying);
    } else if (videoRef === mahavRef.current) {
      setMahavPlaying(isPlaying);
    } else if (videoRef === oshoRef.current) {
      setOshoPlaying(isPlaying);
    } else if (videoRef === dishaRef.current) {
      setDishaPlaying(isPlaying);
    } else if (videoRef === gemRef.current) {
      setGemPlaying(isPlaying);
    } else if (videoRef === cosmoRef.current) {
      setCosmoPlaying(isPlaying);
    } else if (videoRef === sandRef.current) {
      setSandPlaying(isPlaying);
    } else if (videoRef === vesatsRef.current) {
      setVesatsPlaying(isPlaying);
    } else if (videoRef === kd1Ref.current) {
      setKd1Playing(isPlaying);
    } else if (videoRef === kd2Ref.current) {
      setKd2Playing(isPlaying);
    } else if (videoRef === suman1Ref.current) {
      setSuman1Playing(isPlaying);
    } else if (videoRef === suman2Ref.current) {
      setSuman2Playing(isPlaying);
    } else if (videoRef === ga1Ref.current) {
      setGa1Playing(isPlaying);
    }
  };

  const handlePlayButtonClick = (videoRef, setPlaying) => {
    handleFullscreen(videoRef, setPlaying);
  };

  return (
    <div>
      <div className='pv-vedio-container'>
        <div className='vedio-sub1'>
          {!texPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(texVidRef, setTexPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={texVidRef} src={texvid} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!mahPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(mahVidRef, setMahPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={mahVidRef} src={mahvid} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!swPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(swRef, setSwPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={swRef} src={sw} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!mg2Playing && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(mg2Ref, setMg2Playing)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={mg2Ref} src={mg2} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!alliPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(alliRef, setAlliPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={alliRef} src={alli} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!mahavPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(mahavRef, setMahavPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={mahavRef} src={mahav} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!oshoPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(oshoRef, setOshoPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={oshoRef} src={osho} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!dishaPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(dishaRef, setDishaPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={dishaRef} src={disha} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!gemPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(gemRef, setGemPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={gemRef} src={gem} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!cosmoPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(cosmoRef, setCosmoPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={cosmoRef} src={cosmo} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!sandPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(sandRef, setSandPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={sandRef} src={sand} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!vesatsPlaying && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(vesatsRef, setVesatsPlaying)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={vesatsRef} src={vesats} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!kd1Playing && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(kd1Ref, setKd1Playing)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={kd1Ref} src={kd1} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!kd2Playing && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(kd2Ref, setKd2Playing)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={kd2Ref} src={kd2} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!suman1Playing && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(suman1Ref, setSuman1Playing)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={suman1Ref} src={suman1} controls={false} />
        </div>
        <div className='vedio-sub2'>
          {!suman2Playing && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(suman2Ref, setSuman2Playing)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={suman2Ref} src={suman2} controls={false} />
        </div>
        <div className='vedio-sub-ga'>
          {!ga1Playing && (
            <button className='play-buttone' onClick={() => handlePlayButtonClick(ga1Ref, setGa1Playing)}>
              ▶
            </button>
          )}
          <video className='pv-video' ref={ga1Ref} src={ga1} controls={false} />
        </div>
      </div>
    </div>
  );
};

export default Videos;