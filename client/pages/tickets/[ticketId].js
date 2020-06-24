import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const TicketShow = ({ ticket, currentUser }) => {
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push('/orders/[orderId]', `/orders/${order.id}`),
  });

  const purchaseBtn = () => {
    if (currentUser) {
      return (
        <button onClick={() => doRequest()} className="btn btn-primary">
          Purchase
        </button>
      );
    }

    return (
      <button
        onClick={() => Router.push('/auth/signin')}
        className="btn btn-primary"
      >
        Pruchase
      </button>
    );
  };

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h5>Price: {ticket.price}</h5>
      {errors}
      {purchaseBtn()}
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
