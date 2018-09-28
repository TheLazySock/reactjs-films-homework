import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App.jsx';


describe('App', () => {
  it('renders correctly', () => {
    const output = renderer.create(<App />);
    expect(output).toMatchSnapshot();
  });
});
