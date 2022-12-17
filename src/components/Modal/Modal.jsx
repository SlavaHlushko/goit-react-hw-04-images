import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, imageUrl, alt }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.addEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay
      onClick={event => {
        if (event.target !== event.currentTarget) {
          return;
        }
        onCloseModal();
      }}
    >
      <ModalWindow>
        <img src={imageUrl} alt={alt} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
