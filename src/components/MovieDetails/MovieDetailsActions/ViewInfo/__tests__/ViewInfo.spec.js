import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';

import ViewInfo from '../index';

describe('ViewInfo', () => {
  it('renders properly', () => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<ViewInfo onClick={jest.fn()} info="info" />);
    const output = shallowRenderer.getRenderOutput();
    expect(output.type).toBe('div');
    expect(output).toMatchSnapshot();
  });

  it('show description on button click', () => {
    const output = renderer.create(<ViewInfo videoUrl="https://" info="info" />);
    output.root.findByProps({ className: 'viewInfoBtn' }).props.onClick();
    expect(output).toMatchSnapshot();
  });
});
