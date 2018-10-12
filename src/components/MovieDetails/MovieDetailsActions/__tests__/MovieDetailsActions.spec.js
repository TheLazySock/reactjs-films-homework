import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDetailsActions from '../index';

describe('MovieDetailsActions', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const output = renderer.render(<MovieDetailsActions videoUrl="https://" info="info" />);
    expect(output).toMatchSnapshot();
  });

  // it('show description on button click', () => {
  //   const output = renderer.create(<MovieDetailsActions videoUrl="https://" info="info" />);
  //   output.root.findByProps({ className: 'viewInfoBtn' }).props.onClick();
  //   expect(output).toMatchSnapshot();
  // });
});
