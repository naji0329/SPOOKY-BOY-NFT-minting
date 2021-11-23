import React from "react";
import { Container } from "react-bootstrap";

//import Components
import YButton from "../basic/YButton";

//import CSS
import './join-community.css';
class JoinCommunity extends React.Component {
    render() {
        return (
            <div className='join-community-control'>
                <Container >
                    <h1><span>JOIN</span> OUR COMMUNITY</h1>
                    <p>Hole-y Sheet! The Spooky Boys Discord is live! Come join the community now to follow our latest announcements, and participate in spooktacular giveaways.</p>
                    <YButton text='JOIN DISCORD' />
                </Container>
            </div>
        );
    }
}

export default JoinCommunity;