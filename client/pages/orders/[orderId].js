import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import { motion } from 'framer-motion';

import styles from '../../styles/OrderShow.module.scss'

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
          className={styles.index__status}
          style={{ breakWord: 'break-all' }}
        >
          <div>{order.id}</div>
          <div className={styles.index__status__success}>
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
          className={styles.index__status}
          style={{ breakWord: 'break-all' }}
        >
          <div>{order.id}</div>
          <div className={styles.index__status__expired}>
            <strong>Expired</strong>
          </div>
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
      <div className={styles.index__layout}>
        <div className={styles.index__container}>
          <h1 className={styles.index__heading}>Payment</h1>
          {errors}
          <div className={styles.index__info}>
            <h3 className={styles.index__info__heading}>Order Information </h3>
            <p className={styles.index__info__timer}>Time left to pay: {timeLeft} seconds</p>
            <hr className={styles.index__info__splitter}/>
            <p>Order ID: <strong>{order.id}</strong></p>
            <p>Ticket: <strong>{order.ticket.title}</strong></p>
            <p className={styles.index__info__price}>Price: <strong>{order.ticket.price}€</strong></p>

            <div className={styles.index__info__stripe}>
              <StripeCheckout
                token={({ id }) => doRequest({ token: id })}
                stripeKey="pk_test_DndeUtX95wNk2199Jh90AzLi"
                amount={order.ticket.price * 100}
                email={currentUser.email}
              />
            </div>
          </div>
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
