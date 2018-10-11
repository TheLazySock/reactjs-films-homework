import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Footer from '../index';

describe('Footer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('footer');
    expect(result.props.children).toEqual([
      <h2 className="filmsText">FILMS</h2>,
      <span className="copirying">Copirying © 2018 FILMS. ULADZISLAU PIATRENKA</span>,
    ]);
  });
});
