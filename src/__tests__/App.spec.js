import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../App';
import Signature from '../components/Signature';


describe('App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(<Signature name="Uladzislau Piatrenka" />);
  });
});
