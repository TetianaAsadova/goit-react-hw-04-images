import { ColorRing } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ loading }) => {
    return (
        loading && (
          <div className='load'>
            <ColorRing />
          </div>
        )
    )
}

Loader.propTypes = {
    loading: PropTypes.bool,
}

export default Loader;