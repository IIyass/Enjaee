import React from 'react'
import ProfilButton from '../UI/ProfilButton';
import Jhon from '../../Illustration/Martin.png';
import silenticon from '../../Illustration/silenticon.svg';
import endreceiveaudiocallicons from '../../Illustration/Bounding_Circle.svg';
const Screen = (props) => {
    return <><video className="videoInsert" ref={props.localVideoRef} autoPlay playsInline></video>
        <div id="top">
            <div><h1>00:34</h1></div>
            <img src={Jhon} />
        </div>
        <div id="bottom">
            <img src={silenticon} />
            <ProfilButton onClick={() => props.back()}>End Call</ProfilButton>
            <img src={endreceiveaudiocallicons} />
        </div>
    </>
}

export default Screen