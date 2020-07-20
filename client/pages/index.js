import NewTicket from './tickets/new';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td className="">{ticket.title}</td>
        <td>{ticket.price} €</td>
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
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <div className="mb-5 font-weight-light text-center text-light">
        <h1>Buy / Sell your tickets in minutes</h1>
      </div>
      <div className="">
        <div className="d-flex justify-content-between bg-light  px-5 py-3 rounded">
          <h4 className=" ">
            <strong>Last tickets</strong>
          </h4>
          <h4 className="mr-3">{tickets.length}</h4>
        </div>

        <div className="table-responsive bg-light  px-5 py-3 mt-2 rounded">
          <table className="table">
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
