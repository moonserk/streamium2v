import React from 'react'
import styled from 'styled-components'
import '../main.scss'

const Wrapper = styled.header`
    width: 100%;
    background-color: #000000;
    display: flex;
    font-size: 40px;
`
const Nav = styled.nav`
    
`

const Navbar = () => (
    <Wrapper>
        <Nav>
            <div className="icon" href="#">&#9776;</div>
        </Nav>
    </Wrapper>
)

export default Navbar