import React from 'react'
import styled from 'styled-components'
import '../main.scss'

import { heart_gray, trend_gray, live_gray } from '../constants/images'

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50px;
    justify-content: center;
    text-align:  center;
    // padding: 20px 0 0;
    align-items: center;
    background-color: #12334500; 
    z-index: 100;
`

const Divider = styled.div`
    border: solid 1px white;
    margin: 0 20px 0 20px;
    height: 30px;
`
const Image = styled.div`
    display: flex;
    cursor: pointer;
`

const Navbar = () => (
    <HeaderWrapper>
            <Image><img className="icon" src={live_gray} /></Image>
            <Divider />
            <Image><img className="icon" src={heart_gray} /></Image>
            <Divider />
            <Image><img className="icon" src={trend_gray} /></Image>
    </HeaderWrapper>
)

export default Navbar