import React from 'react';
import PropTypes from 'prop-types';
import style from './ViewInfo.scss';

import Button from '../../../Button';

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
        <Button buttonClass="viewInfoBtn" onClick={this.handleShowInfo} title="View Info" />
      </div>
    );
  }
}

ViewInfo.propTypes = {
  info: PropTypes.string.isRequired,
};

export default ViewInfo;
