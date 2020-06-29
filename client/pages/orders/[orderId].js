import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import { motion } from 'framer-motion';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (order.status === 'complete') {
    return (
      <motion.div
        initial={{ opacity: 0, y: '30px' }}
        animate={{ opacity: 1, y: '0px' }}
        exit={{ opacity: 0, y: '30px' }}
      >
        <div
          className="bg-light rounded p-5 d-flex justify-content-between align-items-center"
          style={{ breakWord: 'break-all' }}
        >
          <div>{order.id}</div>
          <div className="text-success">
            <strong>Paid</strong>
          </div>
        </div>
      </motion.div>
    );
  }

  if (timeLeft < 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: '30px' }}
        animate={{ opacity: 1, y: '0px' }}
        exit={{ opacity: 0, y: '30px' }}
      >
        <div
          className="bg-light rounded p-5 d-flex justify-content-between"
          style={{ breakWord: 'break-all' }}
        >
          <h4>{order.id}</h4>
          <h4 className="text-danger">Expired</h4>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <h1 className="text-center text-light">Payment</h1>
      {errors}
      <div className="bg-light rounded mt-5 p-5">
        <div className="d-flex justify-content-between">
          <h3>Order Information </h3>
          <p className="ml-3">Time left to pay: {timeLeft} seconds</p>
        </div>
        <hr />
        <p>Order ID: {order.id}</p>
        <p>Ticket: {order.ticket.title}</p>
        <br />
        <p>
          Price: <strong>{order.ticket.price}€</strong>{' '}
        </p>

        <div className="text-center mt-4">
          <StripeCheckout
            token={({ id }) => doRequest({ token: id })}
            stripeKey="pk_test_DndeUtX95wNk2199Jh90AzLi"
            amount={order.ticket.price * 100}
            email={currentUser.email}
          />
        </div>
      </div>
    </motion.div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
