import React from 'react';
import PropTypes from 'prop-types';
import style from './Rating.scss';

const Rating = ({ rating }) => {
  const stars = Array.from(
    Array(5),
    (elem, i) => <li className={style.filledStar} key={`filled-${i}`} />,
  ).fill(<li className={style.emptyStar} key="empty" />, Math.round(rating));

  return (
    <div className={style.rating}>
      <ul className={style.starsList}>
        {stars}
      </ul>
      <span className={style.ratingAverage}>{rating}</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
