import React from "react";

//import CSS
import './top-item.css';

import { BsSliders } from 'react-icons/bs';
import ImageFire from '../../assets/topitems/fire.png';

class TopItem extends React.Component {

    render() {
        return (
            <div className='top-item'>
                <img src={this.props.image} alt='top item' />
                <div className='top-item-description'>
                    <p>{this.props.name}</p>
                    <h6>{this.props.price}</h6>
                </div>
                <div className='top-item-bid'>
                    <div>
                        <BsSliders /> HighestBid <b>{this.props.highestBid}</b>
                    </div>
                    <p>
                        New Bid &nbsp;
                        <img src={ImageFire} width={17} height={17} alt='new bid' />
                    </p>
                </div>
            </div>
        );
    }
}

export default TopItem;