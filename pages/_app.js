import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import '@/styles/styles.scss';
import '@/styles/normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
