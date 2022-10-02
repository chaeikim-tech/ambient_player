import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import styled from 'styled-components';
import ambImg1 from '../assets/images/ambImg1.jpg';
import ambImg2 from '../assets/images/ambImg2.jpg';
import ambImg3 from '../assets/images/ambImg3.jpg';
import ambImg4 from '../assets/images/ambImg4.jpg';
import ambImg5 from '../assets/images/ambImg5.jpg';
import { AudioPlayer } from './playSound';
import ambAudio1 from '../assets/sounds/ambient1.wav';
import ambAudio2 from '../assets/sounds/ambient2.wav';
import ambAudio3 from '../assets/sounds/ambient3.wav';
import ambAudio4 from '../assets/sounds/ambient4.wav';
import ambAudio5 from '../assets/sounds/ambient5.wav';


const Img = styled.img`
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top:0;
    opacity: 0.5;
`;

const Test = styled.div`
    height: 400px;
    width: 600px;
    border-radius: 10px;
    position: relative;
    background-color: black;
    z-index: -1;
    &:hover ${Img}{
        z-index: -1000;
        opacity:1;
    }
`;


export default () => {
    return (
        <ReactCardCarousel disable_keydown={true} >
            <Test>
                <Img src={ambImg1} />
                <AudioPlayer audioFile={ambAudio1} />
            </Test>
            <Test>
                <Img src={ambImg2} />
                <AudioPlayer audioFile={ambAudio2} />
            </Test>
            <Test>
                <Img src={ambImg3} />
                <AudioPlayer audioFile={ambAudio3} />
            </Test>
            <Test>
                <Img src={ambImg4} />
                <AudioPlayer audioFile={ambAudio4} />
            </Test>
            <Test>
                <Img src={ambImg5} />
                <AudioPlayer audioFile={ambAudio5} />
            </Test>
        </ReactCardCarousel>
    );
};