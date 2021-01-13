import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.scss';
import '../styles/styles.scss';
import '../styles/normalize.css';
import { Head } from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
