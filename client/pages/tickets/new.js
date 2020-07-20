import { useState } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import { motion } from 'framer-motion';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: { title, price },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);
    isNaN(value) ? setPrice(0) : setPrice(value.toFixed(2));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <h1 className="text-center text-light">Sell your ticket</h1>
      <div className="mt-5 pt-4 pb-2 px-5">
        {errors}
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Aa</span>
            </div>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group my-2">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              placeholder="Price"
              value={price}
              onBlur={onBlur}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-warning">Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default NewTicket;
