import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import useOutsideClick from '../hooks/UseClickOutside';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const ModalForm = (props) => {
    const ref = useRef();
    const { closeModal, showModal } = props;
    useOutsideClick(ref, () => {
        closeModal();
    });
    return (
        <CSSTransition in={showModal} timeout={duration} classNames="transition">
            <Modal ref={ref}>
                <button onClick={() => closeModal()}>X</button>
                <form>
                    <input type="text" placeholder="Add a heading" />
                </form>
            </Modal>
        </CSSTransition>
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
    z-index: 100;
    .transition-enter {
        opacity: 0;
    }
    .transition-enter-active {
        opacity: 0.5;
        transition: opacity 300ms;
    }
    .transition-enter-done {
        opacity: 1;
    }
`;

export default ModalForm;
