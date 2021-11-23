import React from "react";

import Logo from '../../assets/logo.png'

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';

//import components
import YButton from "../basic/YButton";
class Header extends React.Component {
    render() {
        return(
            <>
            
            <div className='header-control'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} width={50} height={50} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link
                                onClick={() => window.location.replace('/#mint')} >Mint</Nav.Link>
                            <Nav.Link
                                onClick={() => window.location.replace('/#team')} >TEAM</Nav.Link>
                            <Nav.Link
                                onClick={() => window.location.replace('/#roadmap')} >ROADMAP</Nav.Link>
                            <Nav.Link>
                                <YButton text='OPENSEA' />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <div className='header-content'>
                    <h1>SPOOKY BOYS <br /> COUNTRY CLUB</h1>
                    <div className='header-content-buttons-container'>
                        <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' />
                    </div>
                </div>
                <div></div>
            </div>
            </>
        );
    }
}

export default Header;