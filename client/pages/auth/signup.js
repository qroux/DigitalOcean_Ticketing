import { useState } from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';

import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1 className="text-center text-light mb-5">Sign Up</h1>
      </div>
      <div className="bg-light rounded p-5">
        <form onSubmit={onSubmit}>
          {errors}
          <div className="form-group">
            <label>Email Adress</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
          <div className="text-center pt-4">
            <button className="btn btn-lg btn-primary">sign up</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
