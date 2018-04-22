import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import Video from './components/Video'
import Navbar from './components/Navbar'

const App = () => (
    <div>
        {/* <Navbar /> */}
        <Video />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)