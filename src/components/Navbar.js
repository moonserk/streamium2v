import React from 'react'
import styled from 'styled-components'
import '../main.scss'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    // padding: 20px 0 0;
    // align-items: center;
    background-color: black
`
const Image = styled.div`
    // display: flex;
    align-items: center;
    font-size: 32px;
    // width: 65px;
    // height: 65px;
    color: white;
    // background-repeat: no-repeat;
    // filter: drop-shadow(3px 3px 3px #333);
    // transition: all 200ms ease-in-out;
    cursor: pointer;
    // &:hover {
    //     filter: drop-shadow(6px 6px 6px #333);
    //     transition: all 200ms ease-in-out;
    //     transform: scale(1.10) rotate(-4.5deg);
    // }
`

const Navbar = () => (
    <HeaderWrapper>
            <Image>&#9776;</Image>
    </HeaderWrapper>
)

export default Navbar