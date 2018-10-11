import React from 'react';
import PropTypes from 'prop-types';
import style from './ViewInfoButton.scss';

const ViewInfoButton = (props) => {
  const { onClick } = props;

  return (
    <button type="button" className={style.viewInfoBtn} onClick={onClick}>View Info</button>
  );
};

ViewInfoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ViewInfoButton;
