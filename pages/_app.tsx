import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import '@/styles/normalize.scss';
import '@/styles/styles.scss';
import './galeria/style.css';

function MyApp({ Component, pageProps }) {
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
