import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import WatchNowButton from '../index';

describe('WatchNowButton', () => {
  it('renders properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<WatchNowButton />);
    const output = renderer.getRenderOutput();
    expect(output.type).toBe('button');
    expect(output).toMatchSnapshot();
  });
});
