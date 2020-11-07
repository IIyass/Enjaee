import React from "react"
import { createPortal } from "react-dom"
import * as Style from "./styles"

const Modal = ({ open, onClose, style, body, ...others }) => {
    const modalContent = (
        <>
            <Style.Modal
                onMouseDown={onClose}
                {...others}
            >
                <p>{body}</p>
                <Style.ButtonContainer>
                    <button className="red">No</button>
                    <button className="green">Yes</button>
                </Style.ButtonContainer>
            </Style.Modal>
        </>

    )

    return open ? createPortal(modalContent, document.body) : null
}

export default Modal