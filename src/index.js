import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import Video from './components/Video'
import Navbar from './components/Navbar'
import VideosContainer from './containers/VideosContainer'
import styled from 'styled-components';

const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
`

const App = () => (
    <Wrapper>
        <Navbar />
        <VideosContainer />
    </Wrapper>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)