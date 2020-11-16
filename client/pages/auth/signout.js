import { useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { motion } from 'framer-motion';

export default () => {
  const { doRequest, errors } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <div>Signing you out ...</div>
    </motion.div>
  );
};
