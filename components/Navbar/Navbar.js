import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const burgerRef = useRef(null);
  const [burgerClasses, setBurgerClasses] = useState([
    'hamburger',
    'hamburger--squeeze',
  ]);
  const [navlistClasses, setNavlistClasses] = useState(['navbar__navlist']);
  const toggleMenu = (e) => {
    // e.preventDefault();
    const activeBurgerClasses = [...burgerClasses];
    const activeNavlistClasses = [...navlistClasses];
    if (!activeBurgerClasses[2]) {
      activeBurgerClasses.push('is-active');
    } else {
      activeBurgerClasses.pop('is-active');
    }
    if (!activeNavlistClasses[1]) {
      activeNavlistClasses.push('navbar__navlist--active');
    } else {
      activeNavlistClasses.pop('navbar__navlist--active');
    }
    setBurgerClasses(activeBurgerClasses);
    setNavlistClasses(activeNavlistClasses);
  };

  return (
    <header className="navbar__navbar">
      {/* <Image
        src={require('../../assets/transparentLogo.webp')}
        width="100"
        height="100"
      /> */}
      <nav className="navbar__nav">
        <div className="navbar__logo">
          <a href="/">Logo</a>
        </div>
        <ul className={navlistClasses.join(' ')}>
          <li className="navbar__navitem" onClick={toggleMenu}>
            <Link href="/zajecia" className="navbar__navlink">
              Zajęcia
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="/instruktorzy" className="navbar__navlink">
              Instruktorzy
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="/galeria" className="navbar__navlink">
              Galeria
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="/studio" className="navbar__navlink">
              Studio
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="/cennik" className="navbar__navlink">
              Cennik
            </Link>
          </li>
        </ul>
        <button
          className={burgerClasses.join(' ')}
          onClick={toggleMenu}
          ref={burgerRef}
          type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
      <style jsx>{`
        .navbar__navbar {
          width: 100%;
          height: 150px;
          background-color: #000;

          color: #00d3ff;
          font-size: 24px;
          line-height: 38px;
        }
        .navbar__logo {
          background: url(require('../../assets/transparentLogo.webp'))
            no-repeat;
        }
        .navbar__nav {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar__navlist {
          max-width: 700px;
          width: 40%;
          margin-right: 5%;
          list-style: none;
          display: flex;
          justify-content: space-between;
        }
        .navbar__navitem {
          &:hover {
            cursor: pointer;
            color: #4de0ff;
          }
        }

        /*Hamburger*/

        .hamburger {
          padding: 15px 15px;
          display: none;
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          font: inherit;
          color: inherit;
          text-transform: none;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible;
        }
        .hamburger:hover {
          opacity: 0.7;
        }
        .hamburger.is-active:hover {
          opacity: 0.7;
        }
        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
          background-color: #00d3ff;
        }

        .hamburger-box {
          width: 40px;
          height: 24px;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -2px;
        }
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 40px;
          height: 4px;
          background-color: #00d3ff;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }
        .hamburger-inner::before,
        .hamburger-inner::after {
          content: '';
          display: block;
        }
        .hamburger-inner::before {
          top: -10px;
        }
        .hamburger-inner::after {
          bottom: -10px;
        }
        .hamburger--squeeze .hamburger-inner {
          transition-duration: 0.075s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        .hamburger--squeeze .hamburger-inner::before {
          transition: top 0.075s 0.12s ease, opacity 0.075s ease;
        }
        .hamburger--squeeze .hamburger-inner::after {
          transition: bottom 0.075s 0.12s ease,
            transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger--squeeze.is-active .hamburger-inner {
          transform: rotate(45deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .hamburger--squeeze.is-active .hamburger-inner::before {
          top: 0;
          opacity: 0;
          transition: top 0.075s ease, opacity 0.075s 0.12s ease;
        }
        .hamburger--squeeze.is-active .hamburger-inner::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.075s ease,
            transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        @media screen and (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
          .navbar__logo {
            margin-left: 20px;
          }
          .navbar__navlist {
            height: 100vh;
            width: 60%;
            margin-right: 0px;
            background-color: rgba(0, 0, 0, 0.9);
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            right: 0px;
            top: 120px;
            z-index: 1;
            transform: translateX(100%);
            transition: transform 100ms ease-in;
          }
          .navbar__navlist--active {
            transform: translateX(0%);
          }
          .hamburger {
            display: inline-block;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
