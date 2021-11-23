import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import CEOImage from '../../assets/team/ceo.jpeg';
import CTOImage from '../../assets/team/cto.jpeg';
import CMOImage from '../../assets/team/cmo.jpeg';
import CFOImage from '../../assets/team/cfo.jpeg'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: CEOImage,
                    title: 'CEO',
                    name: "HOLYGHOST"
                },
                {
                    image: CTOImage,
                    title: 'CTO',
                    name: "HOLYGHOST"
                },
                {
                    image: CMOImage,
                    title: 'CMO',
                    name: "HOLYGHOST"
                },
                {
                    image: CFOImage,
                    title: 'CFO',
                    name: "HOLYGHOST"
                }
            ]
        }
    }

    render() {
        return(
            <div className='team-control' id='team'>
                <Container>
                <header><span>SPOOKY BOYS</span> <br/> TEAM.</header>
                    <Row>
                        {
                            this.state.teams.map((item, index) => {
                                return (
                                    <Col md={3} key={index}>
                                        <TeamMember key={index}
                                            imageUrl={item.image}
                                            title={item.title}
                                            name={item.name} />
                                        </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Team