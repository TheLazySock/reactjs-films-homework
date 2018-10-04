import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Signature from '../index';

describe('App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name="Frodo Baggins" />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(<h3 className="name">Frodo Baggins</h3>);
  });
});
