import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDetails from '../index';

describe('MovieDetails', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('section');
    // expect(result.props.children).toEqual([
    //   <h3 className="title">FILMS</h3>,
    //   <div className="searchBox">
    //     <label htmlFor="search-input" className="searchLabel">
    //       <input className="searchInput" id="search-input" type="search" placeholder="Search..." />
    //     </label>
    //   </div>,
    // ]);
  });
});
