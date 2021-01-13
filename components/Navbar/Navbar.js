import React, { useState } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [navlistActive, setNavlistActive] = useState(false);
  const toggleMenu = () => {
    setBurgerActive(!burgerActive);
    setNavlistActive(!navlistActive);
  };

  const navItems = {
    Zajęcia: '#classes',
    Instruktorzy: '#teachers',
    Galeria: '/galeria',
    Cennik: '#prices',
    Grafik: '#timetable',
  };

  const navListItems = Object.keys(navItems).map((item) => (
    <li className={styles.navbar__navitem} onClick={toggleMenu} key={item}>
      <Link href={navItems[item]} className={styles.navbar__navlink}>
        {item}
      </Link>
    </li>
  ));

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__nav}>
        <div className={styles.navbar__logo}>
          <a href="/">Logo</a>
        </div>
        <ul
          className={`${styles.navbar__navlist} ${
            navlistActive ? styles.navbar__navlist_active : ''
          }`}>
          {navListItems}
        </ul>
        <button
          className={`${styles.hamburger} ${styles['hamburger--squeeze']} ${
            burgerActive ? styles['is-active'] : ''
          }`}
          onClick={toggleMenu}
          type="button">
          <span className={styles['hamburger-box']}>
            <span className={styles['hamburger-inner']}></span>
          </span>
        </button>
      </nav>
      <style jsx>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
