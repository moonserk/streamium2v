import React from 'react'
import styled ,{ keyframes } from 'styled-components'
import '../main.scss'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const VideoContainer = styled.video`
    // display: flex;
    position: relative;
    // right: 0; 
    // bottom: 0;
    // animation: ${rotate360} 2s linear;
    margin-top: -50px;
    max-width: 100%; 
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    // width: auto; 
    // height: auto;
    z-index: -100;
`

const Video = ({ src, preview }) => (
        <VideoContainer id="video" autoPlay="autoplay" loop="loop" preload="auto" src={src} controls={!preview}>
            {/* <source src={src}></source>
            <source src="book.webm" type="video/webm"></source> */}
        </VideoContainer>
)


export default Video