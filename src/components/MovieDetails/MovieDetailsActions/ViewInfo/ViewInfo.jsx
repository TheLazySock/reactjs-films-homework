import React from 'react';
import PropTypes from 'prop-types';
import style from './ViewInfo.scss';

class ViewInfo extends React.Component {
  state = {
    isInfoShown: false,
  }

  handleShowInfo = () => {
    this.setState(prevState => ({ isInfoShown: !prevState.isInfoShown }));
  }

  render() {
    const { info } = this.props;
    const { isInfoShown } = this.state;

    return (
      <div className={style.viewInfoContainer}>
        {
          isInfoShown && (
            <div>
              <p className={style.modalInfo}>{info}</p>
            </div>
          )
        }
        <button type="button" className={style.viewInfoBtn} onClick={this.handleShowInfo}>View Info</button>
      </div>
    );
  }
}

ViewInfo.propTypes = {
  info: PropTypes.string.isRequired,
};

export default ViewInfo;
