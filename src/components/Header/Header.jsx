import React from 'react';
import style from './Header.scss';

const Header = () => (
  <header className={style.header}>
    <h3 className={style.title}>FILMS</h3>
    <div className={style.searchBox}>
      <label htmlFor="search-input" className={style.searchLabel}>
        <input className={style.searchInput} id="search-input" type="search" placeholder="Search..." />
      </label>
    </div>
  </header>
);

export default Header;
