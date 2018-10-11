import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDetailsActions.scss';

import WatchNowButton from './WatchNowButton';
import ViewInfoButton from './ViewInfoButton';

class MovieDetailsActions extends React.Component {
  state = {
    isInfoShown: false,
  }

  handleShowInfo = () => {
    this.setState(prevState => ({ isInfoShown: !prevState.isInfoShown }));
  }

  render() {
    const { videoUrl, info } = this.props;
    const { isInfoShown } = this.state;

    return (
      <div className={style.movieDetailsActions}>
        <WatchNowButton videoUrl={videoUrl} />
        <ViewInfoButton onClick={this.handleShowInfo} />
        {
          isInfoShown && (
            <div>
              <p className={style.modalInfo}>{info}</p>
            </div>
          )
        }
      </div>
    );
  }
}

MovieDetailsActions.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default MovieDetailsActions;
