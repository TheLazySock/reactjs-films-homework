import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Rating from '../index';

describe('Rating', () => {
  it('renders properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Rating rating={3} />);
    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
