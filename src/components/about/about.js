import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/about.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control'>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header><span>13,000</span> UNIQUE<br /> GHOSTS.</header>
                            <p>
                            n the depths of the Metaverse, nestled in the eloquent hills of the Ethereum blockchain lies a Country Club, defined by excellence, prestige, and respect. The Spooky Boys Country Club offers 13,000 unique, digital collectibles that represent community through ownership.
                            </p>
                            <p>
                            The Spooky Boys Country Club members obtain safety, integrity, and metaversal recognition. This project blends hypebeast fashion, country club mannerisms, and spooky vibes to create unique collectibles.
                            </p>
                            <p>
                            Spooky Boys Country Club was developed by an experienced team and is curated by none other than the most OG Ghost in the game, The “Ghost of the Gram”, <span>@HOLYGHOST</span> on Instagram.
                            </p>
                            <div><YButton text='COMING SOON' /></div>
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;