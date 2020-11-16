import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/OrderIndex.module.scss'

const OrderIndex = ({ currentUser, orders }) => {
  const orderList = orders.length <= 0 ? <div className={styles.index__orders__empty}>
  No order yet
</div> : orders.map((order) => {
    console.log(orders)
    return (
      <div key={order.id} className={styles.index__orders__item}>
        <Link href="/orders/[orderId]" as={`/orders/${order.id}`}>
          <a className={styles.index__order__link}>ID - {order.id} <span className={styles.index__order__link__details}>/ order acces</span></a>
        </Link>
        <div className={styles.index__order__item}>{order.ticket.title}</div>
        <div className={styles.index__order__item}>{order.ticket.price}€</div>
        <div className={styles.index__order__item}>{order.status}</div>
      </div>
    );
  });

  return (
    <motion.div
      initial={{ y: '30px' }}
      animate={{ y: '0px' }}
      exit={{ y: '30px' }}
    >
      <div className={styles.index__layout}>
        <div className={styles.index__container}>
          <h1 className={styles.index__heading}>Orders History</h1>
          <div className={styles.index__identification}>
            <h4 className={styles.index__identification__heading}>Account: <strong>{currentUser.email}</strong></h4>
          </div>
          <div className={styles.index__orders}>
            {orderList}
          </div>
          
        </div>
      </div>

    </motion.div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;
