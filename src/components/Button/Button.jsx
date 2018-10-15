import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.scss';

const Button = ({ title, buttonClass, onClick }) => (
  <button
    type="button"
    className={style[buttonClass]}
    onClick={onClick}
  >
    {title}
  </button>
);

Button.defaultProps = {
  onClick: () => { console.log('clicked'); },
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
