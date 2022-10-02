import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";


const PLAYING = "PLAYING";
const PAUSED = "PAUSED";


const ToggleIcon = ({ status }) => {
    switch (status) {
        case PLAYING:
            return <FontAwesomeIcon className='ToggleIcon' icon={faPause} size="3x" />;
        case PAUSED:
            return <FontAwesomeIcon className='ToggleIcon' icon={faPlay} size="3x" />;
        default:
            return <FontAwesomeIcon className='ToggleIcon' icon={faPause} size="3x" />;
    }
};


export const AudioPlayer = ({ audioFile }) => {
    const [status, setStatus] = useState(PAUSED);
    const audioEl = useRef(null);

    const onToggleClick = () => {
        const audio = audioEl.current;
        audio.paused ? audio.play() : audio.pause();
    };

    return (
        <div className="Player">
            <audio
                onPlaying={() => setStatus(PLAYING)}
                onPause={() => setStatus(PAUSED)}
                ref={audioEl}
                src={audioFile}
            />
            <div className="controls">
                <button onClick={onToggleClick}>
                    <ToggleIcon status={status} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
                </button>
            </div>
        </div>
    );
};