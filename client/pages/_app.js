import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

import Header from '../components/header';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const AppComponent = ({ Component, pageProps, currentUser, router }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Holtwood+One+SC&family=Montserrat:wght@500&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </Head>
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
