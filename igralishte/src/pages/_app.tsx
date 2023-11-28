import '../styles/main.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserContextConstructor from '../context/UserContext';
import Authentication from '../components/Authentication';
import { useRouter } from 'next/router';
import HamburgerMenu from '@/components/HamburgerMenu';


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const isLoginPage = router.route === '/login';
  const isProfilePage = router.route === '/profile';


  return (
    <div>
      <UserContextConstructor>
        <Authentication>
           {!isLoginPage && !isProfilePage && <Header />}
          <Component {...pageProps} />
           {!isLoginPage && !isProfilePage && <Footer />}
        </Authentication>
      </UserContextConstructor>
    </div>
  );
}

export default MyApp;


