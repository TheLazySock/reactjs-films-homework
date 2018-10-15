import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDetails from '../index';
import MovieDetailsActions from '../MovieDetailsActions';
import MovieDetailsInfo from '../MovieDetailsInfo';

describe('MovieDetails', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('section');
    expect(result.props.children).toEqual([
      <MovieDetailsInfo
        title="The jungle book"
        genres={['Adventure', 'Drama', 'Family', 'Fantasy']}
        duration="1h 46m"
        rating={4.8}
      />,
      <MovieDetailsActions
        info="There are growing dangers in the wozarding world of 1926 New York.
          Something musterious is leaving a path of destruction in the streets, threating to expose the wizarding"
      />,
    ]);
  });
});
