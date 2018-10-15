import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDetailsInfo from '../index';
import Rating from '../Rating';
import Genres from '../Genres';

describe('MovieDetailsInfo', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsInfo title="Movie" duration="2h 10m" rating={4.1} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
      <h2 className="movieInfoTitle">MOVIE</h2>,
      <div className="genresDurationBox">
        <Genres genres={['Adventure', 'Drama', 'Family', 'Fantasy']} />
        <span className="duration">2h 10m</span>
      </div>,
      <Rating rating={4.1} />,
    ]);
  });
});
