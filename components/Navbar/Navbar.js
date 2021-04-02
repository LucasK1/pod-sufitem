import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [navlistActive, setNavlistActive] = useState(false);

  const { pathname } = useRouter();

  function toggleMenu() {
    setBurgerActive(!burgerActive);
    setNavlistActive(!navlistActive);
  }

  const navItems = [
    {
      id: 'classes',
      name: 'Zajęcia',
      url: '/#zajecia',
      isLink: true,
    },
    {
      id: 'teachers',
      name: 'Instruktorki',
      url: '/#instruktorki',
      isLink: true,
    },
    {
      id: 'prices',
      name: 'Cennik',
      url: '/#cennik',
      isLink: true,
    },
    {
      id: 'gallery',
      name: 'Galeria',
      url: '/galeria',
      isLink: true,
    },
    {
      id: 'contact',
      name: 'Kontakt',
      url: pathname === '/galeria' ? '/galeria#kontakt' : '/#kontakt',
      isLink: true,
    },
    {
      id: 'booking',
      name: 'Grafik i zapisy',
      url: 'https://app.fitssey.com/podsufitem/frontoffice',
      isLink: false,
    },
  ];

  const navListItems = navItems.map((item) => (
    <li
      className={`${styles.navbar__navitem} ${
        !item.isLink && styles.navbar__navitem_blue
      }`}
      onClick={toggleMenu}
      key={item.id}>
      {item.isLink ? (
        <Link href={item.url} className={styles.navbar__navlink} tabIndex="0">
          {item.name}
        </Link>
      ) : (
        <a
          href={item.url}
          target="_blank"
          className={styles.navbar__bookingLink}>
          {item.name}
        </a>
      )}
    </li>
  ));

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__nav}>
        <div className={styles.navbar__logo}>
          <Link href="/" passHref>
            <Logo />
          </Link>
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
    </header>
  );
};

export default Navbar;

const Logo = React.forwardRef(({ onClick, href }, ref) => (
  <a
    href={href}
    ref={ref}
    onClick={onClick}
    className={styles.navbar__logoAnchor}>
    <Image
      src="/static/images/transparentLogo.png"
      alt="Homepage"
      height="120"
      width="206"
    />
  </a>
));
