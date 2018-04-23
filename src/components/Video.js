import React from 'react'
import styled from 'styled-components'
import "../main.scss"

const VideoContainer = styled.video`
    display: flex;
    position: fixed;
    // right: 0; 
    // bottom: 0;
    max-width: 100%; 
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    // width: auto; 
    // height: auto;
    z-index: -100;
`

const Video = ({ src }) => (
	<VideoContainer id="video" autoPlay="autoplay" loop="loop" preload="auto" src={src}>
		{/* <source src={src}></source>
		<source src="book.webm" type="video/webm"></source> */}
	</VideoContainer>
)


export default Video