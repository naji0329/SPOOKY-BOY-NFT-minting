import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import YButton from "../basic/YButton";

//import CSS
import './top-items.css';

//import Assets
import Item1 from '../../assets/topitems/item1.png';
import Item2 from '../../assets/topitems/item2.png';
import Item3 from '../../assets/topitems/item3.png';

//import Component
import TopItem from "./top-item";

class TopItems extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            topItems: [
                {
                    image: Item1,
                    name: "COMING SOON",
                    price: '130 ETH',
                    highestBid: 'A LOT OF ETH'
                },
                {
                    image: Item2,
                    name: "COMING SOON",
                    price: '130 ETH',
                    highestBid: 'A LOT OF ETH'
                },
                {
                    image: Item3,
                    name: "COMING SOON",
                    price: '130 ETH',
                    highestBid: 'A LOT OF ETH'
                }
            ]
        }
    }

    render() {
        return (
            <div className='top-items-control'>
                <Container>
                    <div className='top-items-header'>
                        <header><span>Top</span> <br />SPOOKY BOYS</header>
                        <YButton text='VIEW ON OPENSEA' />
                    </div>
                    <Row>
                        {
                            this.state.topItems.map((item, index) => {
                                return (
                                    <Col md={4} xs={12} key={index}>
                                        <TopItem 
                                            image={item.image}
                                            name={item.name}
                                            price={item.price}
                                            highestBid={item.highestBid}
                                            />
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

export default TopItems