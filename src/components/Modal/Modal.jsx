import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ src, alt, showModal, onClose }) => {
  return (
    showModal && (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;