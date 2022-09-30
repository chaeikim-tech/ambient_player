import { useState, useRef } from 'react';
import styled from 'styled-components';
import ambImg1 from '../assets/images/ambImg1.jpg';



const AmbImgOne = styled.img`
    width:100vw;
    height: 100vh;
`;

export const AudioPlayer = ({ imgSrc, audioSrc }) => {
    const [status, setStatus] = useState({
        isPlaying: false,
        isLoop: false,
        isLoaded: false,
        error: false,
    });
    const audioRef = useRef(null);

    const toggleAudio = () =>
        status.isLoaded
            ? status.isPlaying
                ? audioRef.current.pause()
                : audioRef.current.play()
            : console.log("Audio has not loaded yet.");

    return (
        <>
            <AmbImgOne src={ambImg1} onClick={toggleAudio} />
            <audio
                ref={audioRef}
                src={audioSrc}
                onLoad={() => setStatus({ ...status, isLoaded: true })}
                onPlay={() => setStatus({ ...status, isPlaying: true })}
                onPause={() => setStatus({ ...status, isPlaying: false })}
                onError={() => setStatus({ ...status, error: true })}
            />
        </>
    );
};