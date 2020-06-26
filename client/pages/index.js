import NewTicket from './tickets/new';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td className="">{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>view</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mb-5 font-weight-light text-center text-light">
        <h1>Buy / Sell your tickets in minutes</h1>
      </div>
      <div className="bg-light rounded p-5">
        <h4>Last tickets : {tickets.length}</h4>
        <div className="table-responsive">
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{ticketList}</tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
