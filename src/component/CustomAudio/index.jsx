import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";
import moment from "moment";

import "./styles.scss";

const CustomAudio = ({ audioSrc, isPlaying, setIsPlaying }) => {
  const [trackProgress, setTrackProgress] = useState(0);

  const [volumeAudio, setVolumeAudio] = useState(1);
  // console.log(audioSrc);

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  // console.log(audioSrc);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [audioSrc]);

  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      // a.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!audioRef.current.ended) {
        setTrackProgress(audioRef.current.currentTime);
      } else {
        setIsPlaying(false);
      }
    }, [100]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const onScrub = (value) => {
    // Clear any timers already running
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
    startTimer();
  };

  /**
   * set volume
   * onChangeVolume(value)
   * turnOnVolume()
   * turnOffVolume()
   */
  const onChangeVolume = (value) => {
    audioRef.current.volume = value;
    setVolumeAudio(audioRef.current.volume);
  };

  const turnOnVolume = () => {
    setVolumeAudio(audioRef.current.volume);
  };

  const turnOffVolume = () => {
    audioRef.current.volume = 0;
    setVolumeAudio(audioRef.current.volume);
  };

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #60d3c6), color-stop(${currentPercentage}, rgb(204, 204, 204)))
`;

  const volumeStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volumeAudio}, #60d3c6), color-stop(${volumeAudio}, rgb(204, 204, 204)))
`;

  return (
    <div className="custom-audio">
      <div className="custom-audio__left">
        <div className="custom-audio__left-play-stop">
          {isPlaying ? (
            <Button
              shape="circle"
              onClick={onPlayPauseClick}
              icon={<i className="fa-solid fa-pause"></i>}
            />
          ) : (
            <Button
              shape="circle"
              onClick={onPlayPauseClick}
              icon={<i className="fa-solid fa-play"></i>}
            />
          )}
        </div>
        <div className="custom-audio__left-progress">
          <input
            type="range"
            defaultValue={0}
            min={0}
            value={trackProgress}
            step={0.1}
            onChange={(e) => onScrub(e.target.value)}
            max={duration ? duration : `${duration}`}
            style={{ background: trackStyling, width: "400px" }}
          />
        </div>
        <div className="custom-audio__left-time">
          <span>
            {moment.utc(trackProgress * 1000).format("mm:ss")}
            {"/"}
            {moment.utc(Math.floor(duration || 0) * 1000).format("mm:ss")}
          </span>
        </div>
      </div>

      <div className="custom-audio__volume">
        <span>
          {volumeAudio === 0 ? (
            <i onClick={turnOnVolume} className="fa-solid fa-volume-xmark"></i>
          ) : (
            <i onClick={turnOffVolume} className="fa-solid fa-volume-high"></i>
          )}
        </span>

        <div>
          <input
            type="range"
            defaultValue={audioRef.current.volume || 1}
            min={0}
            value={volumeAudio}
            step={0.1}
            onChange={(e) => onChangeVolume(e.target.value)}
            max={1}
            style={{ background: volumeStyling, width: "130px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomAudio;
