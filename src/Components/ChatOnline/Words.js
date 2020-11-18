import React from 'react';
import * as Style from './style'
import Ellipse14 from '../../Illustration/Ellipse14.svg'
import Truch from '../../Illustration/Icon/Web/Action/Group35.svg'
import chatbubble from '../../Illustration/chatbubble.svg'
const Quote = ({ sender, img, time, name, text }) => {

    return (
        <Style.QuoteWrapper sender={sender}>
            <div id="info"><h1>{name}</h1> <img src={Ellipse14} /> <p>{time}</p></div>
            <div id="messageWrapper">
                {img ? <img id="asset" src={chatbubble} /> : <></>}
                <div id="messageContainer">
                    <div id="message">
                        <p>{text}</p>
                    </div>
                    <img src={Truch} />
                </div>
            </div>
        </Style.QuoteWrapper>
    )
}

export default Quote;