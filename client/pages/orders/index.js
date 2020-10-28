import { motion } from 'framer-motion';
import Link from 'next/link';

const OrderIndex = ({ currentUser, orders }) => {
  console.log(orders);
  const orderList = orders.map((order) => {
    return (
      <tr key={order.id}>
        <td>
          <Link href="/orders/[orderId]" as={`/orders/${order.id}`}>
            <a>{order.id}</a>
          </Link>
        </td>
        <td>{order.ticket.title}</td>
        <td>{order.ticket.price}</td>
        <td>{order.status}</td>
      </tr>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <h1 className="text-light text-center">Orders History</h1>
      <div className="mt-5">
        <h5 className="bg-light rounded px-5 py-3">
          <strong>Account: {currentUser.email}</strong>
        </h5>
        <div className="table-responsive bg-light rounded px-5 py-3">
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Order id</th>
                <th>Ticket</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{orderList}</tbody>
          </table>
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
