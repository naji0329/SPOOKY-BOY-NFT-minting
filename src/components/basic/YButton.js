import React from "react";

//import CSS
import './YButton.css';

class YButton extends React.Component{
    
    render() {
        return(
            <button className='ybutton'>{this.props.text}</button>
        );
    }
}

export default YButton;