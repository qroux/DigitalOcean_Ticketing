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
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
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

// const OrderIndex = ({ currentUser, orders }) => {
//   console.log(orders);
//   const orderList = orders.map((order) => {
//     return (
//       <tr key={order.id}>
//         <td>
//           <Link href="/orders/[orderId]" as={`/orders/${order.id}`}>
//             <a>{order.id}</a>
//           </Link>
//         </td>
//         <td>{order.ticket.title}</td>
//         <td>{order.ticket.price}</td>
//         <td>{order.status}</td>
//       </tr>
//     );
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: '30px' }}
//       animate={{ opacity: 1, y: '0px' }}
//       exit={{ opacity: 0, y: '30px' }}
//     >
//       <h1 className="text-light text-center">Orders History</h1>
//       <div className="mt-5">
//         <h5 className="bg-light rounded px-5 py-3">
//           <strong>Account: {currentUser.email}</strong>
//         </h5>
//         <div className="table-responsive bg-light rounded px-5 py-3">
//           <table className="table mt-3">
//             <thead>
//               <tr>
//                 <th>Order id</th>
//                 <th>Ticket</th>
//                 <th>Price</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>{orderList}</tbody>
//           </table>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;
