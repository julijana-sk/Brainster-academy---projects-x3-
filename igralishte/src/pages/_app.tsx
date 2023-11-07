import '../styles/main.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserContextConstructor from '../context/UserContext';
import Authentication from '../components/Authentication';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextConstructor>
        <Authentication>
          <Header />
            <Component {...pageProps} />
          <Footer />
        </Authentication>
      </UserContextConstructor>
    </>
  );
}

export default MyApp;

