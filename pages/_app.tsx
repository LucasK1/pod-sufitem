import Footer from 'components/footer/footer';
import Navbar from 'components/navbar/navbar';
import { AppProps } from 'next/app';
import 'pages/galeria/style.css';
import 'styles/normalize.scss';
import 'styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to Content
      </a>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
