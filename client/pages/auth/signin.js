import { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';

import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <div>
        <h1 className="text-center text-light mb-5">Log In</h1>
      </div>
      <div className="p-5">
        <form onSubmit={onSubmit}>
          {errors}
          <div className="form-group">
            <input
              placeholder="e-mail@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
          <div className="text-center pt-4">
            <button className="btn btn-lg btn-warning">log in</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
