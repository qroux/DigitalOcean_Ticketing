import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

import Header from '../components/header';
import Head from 'next/head';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Header currentUser={currentUser} />
      <div className="container mt-5 py-5 rounded">
        <Component currentUser={currentUser} {...pageProps} />
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
