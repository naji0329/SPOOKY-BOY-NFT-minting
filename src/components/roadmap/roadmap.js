import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/roadmap.png';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'HOLE1',
                    title: 'Welcome',
                    content: 'Welcome to the Club! Spooky Boys official public mint is revealed. The presale dates will be announced as soon as the technical aspects of our project are brought to completion.'
                },
                {
                    tag: 'HOLE2',
                    title: 'Spoo-keys airdrop',
                    content: 'All project holders will get airdropped a set of Spoo-keys. Also hire slayer'
                },
                {
                    tag: 'HOLE3',
                    title: 'Unlock a mystery',
                    content: 'Use your Spoo-keys to unlock a mystery.'
                },
                {
                    tag: 'HOLE4',
                    title: 'Token launch',
                    content: 'Spooky boys token launch.'
                },
                {
                    tag: 'HOLE5',
                    title: 'Staking Launch',
                    content: 'Staking will begin Q2 of 2022 to add increased value to all loyal Country Club members who HODL and accumulate tokens.'
                },
                {
                    tag: 'HOLE6',
                    title: 'Spooky Boys Survival Game - Beta Version Release',
                    content: 'This game is currently being developed and will create more benefits to Country Club members through in-game contests and token accumulation.'
                },
                {
                    tag: 'HOLE7',
                    title: 'Spooky Boys Survival Game Launch',
                    content: 'Spooky Szn will be in full swing upon release of one of the best metaversal games!'
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap'>
                <Container >
                    <header><span>SPOOKY BOYS</span> <br/> ROADMAP.</header>
                    <p className='roadmap-description'>
                    Our Roadmap outlines some of the future perks Spooky Boys Country Club members will be able to enjoy. Scroll through the course map and look over some of the ideas and concepts we wish to grow and deliver. We are constantly developing here at SBCC, so this map will also develop and evolve as more ideas are created to make our Country Club the top rated club of the Metaverse!
                    </p>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={roadmap} alt='roadmap' />
                        </Col>
                        <Col xs={12} md={6}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return(
                                        <RoadMapItem key={index}
                                            tag= {item.tag}
                                            title= {item.title}
                                            content= {item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

export default RoadMap;