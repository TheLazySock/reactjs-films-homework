import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDetailsInfo from '../index';
import Rating from '../Rating';

describe('MovieDetailsInfo', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsInfo title="Movie" genres={['Action', 'Drama']} duration="2h 10m" rating={4.1} />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
      <h2 className="movieInfoTitle">MOVIE</h2>,
      <div className="genresDurationBox">
        <ul className="genres">
          <li className="genresItem" key="Action">Action</li>
          <li className="genresItem" key="Drama">Drama</li>
        </ul>
        <span className="duration">2h 10m</span>
      </div>,
      <Rating rating={4.1} />,
    ]);
  });
});
