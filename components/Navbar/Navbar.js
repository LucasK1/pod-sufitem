import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="navbar__navbar">
      {/* <Image
        src={require('../../assets/transparentLogo.webp')}
        width="100"
        height="100"
      /> */}
      <div className="navbar__logo">Logo</div>
      <nav className="navbar__nav">
        <ul className="navbar__navlist">
          <li className="navbar__navitem">
            <Link href="#" className="navbar__navlink">
              Zajęcia
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="#" className="navbar__navlink">
              Instruktorzy
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="#" className="navbar__navlink">
              Galeria
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="#" className="navbar__navlink">
              Studio
            </Link>
          </li>
          <li className="navbar__navitem">
            <Link href="#" className="navbar__navlink">
              Cennik
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .navbar__navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          width: 40%;
          max-width: 700px;
          margin-right: 5%;
        }
        .navbar__navlist {
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
      `}</style>
    </header>
  );
};

export default Navbar;
