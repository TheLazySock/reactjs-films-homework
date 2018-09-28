import React from 'react';
import renderer from 'react-test-renderer';

import Signature from '../index';


describe('Signature', () => {
  it('rendered with correct name', () => {
    const output = renderer.create(<Signature name="Frodo Baggins" />);
    expect(output).toMatchSnapshot();
  });
});
