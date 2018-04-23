import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import Video from './components/Video'
import Navbar from './components/Navbar'
import VideosContainer from './containers/VideosContainer'

const App = () => (
    <div>
        {/* <Navbar /> */}
        <VideosContainer />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)