import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ViewInfoButton from '../index';

describe('ViewInfoButton', () => {
  it('renders properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ViewInfoButton onClick={jest.fn()} />);
    const output = renderer.getRenderOutput();
    expect(output.type).toBe('button');
    expect(output).toMatchSnapshot();
  });
});
