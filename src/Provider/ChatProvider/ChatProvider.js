import React, { useState } from 'react';
export const Chat = React.createContext();


const ChatProvider = (props) => {

    const [step, setStep] = useState(1);


    const next = () => {
        // update state.step by adding to previous state
        setStep(step + 1)
    }
    const back = () => {
        // update state.step by adding to previous state
        setStep(step - 1)
    }

    return (

        <Chat.Provider
            value={{
                step,
                next,
                back,
            }}>
            {props.children}
        </Chat.Provider>
    );
};

export default ChatProvider;