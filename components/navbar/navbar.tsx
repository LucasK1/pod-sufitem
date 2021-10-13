import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './navbar.module.scss';

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
      key={item.id}
    >
      {item.isLink ? (
        <Link href={item.url}>
          <a className={styles.navbar__navlink} tabIndex={0}>
            {item.name}
          </a>
        </Link>
      ) : (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className={styles.navbar__bookingLink}
        >
          {item.name}
        </a>
      )}
    </li>
  ));

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__nav}>
        <Link href="/#" passHref>
          <img
            src="/static/images/transparentLogo.png"
            alt=""
            className={styles.navbar__logo}
          />
        </Link>
        <ul
          className={`${styles.navbar__navlist} ${
            navlistActive ? styles.navbar__navlist_active : ''
          }`}
        >
          {navListItems}
        </ul>
        <button
          className={`${styles.hamburger} ${styles['hamburger--squeeze']} ${
            burgerActive ? styles['is-active'] : ''
          }`}
          onClick={toggleMenu}
          type="button"
        >
          <span className={styles['hamburger-box']}>
            <span className={styles['hamburger-inner']}></span>
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
