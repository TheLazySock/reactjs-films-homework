import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../index';

describe('Button', () => {
  it('renders properly', () => {
    const output = renderer.create(<Button title="btn" buttonClass="cls" />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it('show description on button click', () => {
    const output = renderer.create(<Button title="btn" buttonClass="cls" />);
    output.root.findByType('button').props.onClick();
    expect(output).toMatchSnapshot();
  });
});
