import React, { useRef } from 'react';
import styled from 'styled-components';
import useOutsideClick from '../hooks/UseClickOutside';

const ModalForm = (props) => {
    const ref = useRef();
    const { closeModal } = props;
    useOutsideClick(ref, () => {
        closeModal();
    });
    return (
        <Modal ref={ref}>
            <button onClick={() => closeModal()}>X</button>
            <form>
                <input type="text" placeholder="Add a heading" />
            </form>
        </Modal>
    )
}

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 500px;
    background-color: white;
    border: black 1px solid;
    border-radius: 2rem;
`;

export default ModalForm;
