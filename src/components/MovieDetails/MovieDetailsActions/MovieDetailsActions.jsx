import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDetailsActions.scss';

import Button from '../../Button';
import ViewInfo from './ViewInfo';

const MovieDetailsActions = (props) => {
  const { info } = props;

  return (
    <div className={style.movieDetailsActions}>
      <Button buttonClass="watchVideoBtn" title="Watch Now" />
      <ViewInfo info={info} />
    </div>
  );
};

MovieDetailsActions.propTypes = {
  info: PropTypes.string.isRequired,
};

export default MovieDetailsActions;
