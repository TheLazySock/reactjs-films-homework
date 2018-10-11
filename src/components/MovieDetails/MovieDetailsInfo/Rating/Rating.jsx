import React from 'react';
import PropTypes from 'prop-types';
import style from './Rating.scss';

const Rating = (props) => {
  const { rating } = props;
  const filled = Array.from(
    Array(Math.round(rating)),
    (elem, i) => <li className={style.star} key={`filled-${i}`}><span>&#9733;</span></li>,
  );
  const empty = Array.from(
    Array(5 - filled.length),
    (elem, i) => <li className={style.star} key={`empty-${i}`}><span>&#9734;</span></li>,
  );

  return (
    <div className={style.rating}>
      <ul className={style.starsList}>
        {filled}
        {empty}
      </ul>
      <span className={style.ratingAverage}>{rating}</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
