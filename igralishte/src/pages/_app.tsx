import '../styles/main.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserContextConstructor from '../context/UserContext';
import Authentication from '../components/Authentication';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const isLoginPage = router.route === '/login';
  const isProfilePage = router.route === '/profile';
  const isRegisterPage = router.route === '/register';



  return (
    <div>
      <UserContextConstructor>
        <Authentication>
           {(!isLoginPage && !isProfilePage && !isRegisterPage) && <Header />}
          <Component {...pageProps} />
           {(!isLoginPage && !isProfilePage && !isRegisterPage) && <Footer />}
        </Authentication>
      </UserContextConstructor>
    </div>
  );
}

export default MyApp;


