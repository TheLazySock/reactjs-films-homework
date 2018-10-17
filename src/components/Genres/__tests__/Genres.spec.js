import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Genres from '../index';

describe('Genres', () => {
  it('renders properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Genres genres={['Action', 'Drama']} />);
    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
