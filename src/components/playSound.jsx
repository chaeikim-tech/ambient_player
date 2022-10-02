import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";



const AmbImgOne = styled.img`
    width:100vw;
    height: 100vh;
`;

const INITIAL = "INITIAL";
const PLAYING = "PLAYING";
const PAUSED = "PAUSED";
const ENDED = "ENDED";


const ToggleIcon = ({ status }) => {
    switch (status) {
        case INITIAL:
            return <FontAwesomeIcon icon={faPlay} />;
        case PLAYING:
            return <FontAwesomeIcon icon={faPlay} />;
        case PAUSED:
            return <FontAwesomeIcon icon={faPause} />;
        default:
            return <FontAwesomeIcon icon={faPlay} />;
    }
};


export const AudioPlayer = ({ audioFile }) => {
    const [status, setStatus] = useState(INITIAL);
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
                onEnded={() => setStatus(ENDED)}
                ref={audioEl}
                src={audioFile}
            />
            <div className="controls">
                <button onClick={onToggleClick} className="toggle">
                    <ToggleIcon status={status} />
                </button>
            </div>
        </div>
    );
};