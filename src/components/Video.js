import React from 'react'
import styled from 'styled-components'
import "../main.scss"

const VideoContainer = styled.video`
    position: fixed;
    right: 0; 
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    width: auto; 
    height: auto;
    z-index: -100;
`

const Video = () => (
	<VideoContainer id="video" width="100%" height="auto" autoPlay="autoplay" loop="loop" preload="auto">
		<source src="https://s3-ap-northeast-1.amazonaws.com/vue2/rose.mp4"></source>
		<source src="book.webm" type="video/webm"></source>
	</VideoContainer>
)

export default Video