import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Signature = (props) => {
  const { name } = props;
  return (
    <div className={style.background}>
      <h3 className={style.name}>
        {name}
      </h3>
    </div>
  );
};

Signature.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Signature;
