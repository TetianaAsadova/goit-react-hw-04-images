import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
    return (
        <li className={css.imagegalleryitem}>
            <img src={src} alt={alt} onClick={onClick} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ImageGalleryItem;