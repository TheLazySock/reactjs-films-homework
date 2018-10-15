import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDetailsActions from '../index';

describe('MovieDetailsActions', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const output = renderer.render(<MovieDetailsActions videoUrl="https://" info="info" />);
    expect(output).toMatchSnapshot();
  });
});
