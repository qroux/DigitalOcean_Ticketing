// import 'bootstrap/dist/css/bootstrap.css';
import "../styles/global.scss";
// import styles from "../styles/Layout.module.scss";
import buildClient from '../api/build-client';

import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';
// import Head from 'next/head';

const AppComponent = ({ Component, pageProps, currentUser, router }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container mt-5 py-5 rounded">
        <AnimatePresence exitBeforeEnter>
          <Component
            currentUser={currentUser}
            {...pageProps}
            key={router.route}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
