import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDetailsActions.scss';

import WatchNowButton from './WatchNowButton';
import ViewInfo from './ViewInfo';

class MovieDetailsActions extends React.Component {
  render() {
    const { videoUrl, info } = this.props;

    return (
      <div className={style.movieDetailsActions}>
        <WatchNowButton videoUrl={videoUrl} />
        <ViewInfo onClick={this.handleShowInfo} info={info} />
      </div>
    );
  }
}

MovieDetailsActions.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default MovieDetailsActions;
