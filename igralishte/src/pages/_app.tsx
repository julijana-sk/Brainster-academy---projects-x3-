import '../styles/main.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserContextConstructor, { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const { data } = useContext(UserContext);
  const isLoginPage = router.route === '/login';
  const isProfilePage = router.route === '/profile';
  const isRegisterPage = router.route === '/register';
  const isOrderFormPage = router.route === '/order/orderForm';

  return (
    <div>
      <UserContextConstructor>
           {(!isLoginPage && !isProfilePage && !isRegisterPage && !isOrderFormPage) && <Header products={(data.map((dataItem) => dataItem.products)).flat()} />}
          <Component {...pageProps} />
           {(!isLoginPage && !isProfilePage && !isRegisterPage && !isOrderFormPage) && <Footer />}
      </UserContextConstructor>
    </div>
  );
}

export default MyApp;


