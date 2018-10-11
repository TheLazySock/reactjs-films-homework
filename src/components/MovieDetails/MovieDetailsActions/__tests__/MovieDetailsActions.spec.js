import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetailsActions from '../index';

describe('MovieDetailsActions', () => {
  it('renders correctly', () => {
    const output = renderer
      .create(<MovieDetailsActions videoUrl="https://" info="info" />)
      .toJSON();
    expect(output).toMatchSnapshot();
  });

  it('show description on button click', () => {
    const output = renderer.create(<MovieDetailsActions videoUrl="https://" info="info" />);
    output.root.findByProps({ className: 'viewInfoBtn' }).props.onClick();
    expect(output).toMatchSnapshot();
  });
});
