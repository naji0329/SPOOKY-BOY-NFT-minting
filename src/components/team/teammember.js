import React from "react";

//import CSS
import './teammember.css';

class TeamMember extends React.Component {
    render() {
        return (
            <div className='teammember-control'>
                <img src={this.props.imageUrl} alt='team member'/>
                <div className='teammember-description'>
                    <p className='teammember-name'>@{this.props.name}</p>
                    <p className='teammember-occupation'>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default TeamMember;