import styles from '../../styles/Show.module.scss'
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import { motion } from 'framer-motion';

export default function TicketShow({ticket, currentUser }) {
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
        <div onClick={() => doRequest()} className={styles.button}>
          Purchase
        </div>
      );
    }

    return (
      <div
        onClick={() => Router.push('/auth/signin')}
        className={styles.button}
      >
        Pruchase
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <div className={styles.show__layout}>
        <div className={styles.show__container}>
          <div className={styles.show__center}>
            <h1 className={styles.show__heading}>Ticket Details</h1>
            <div className={styles.show__ticket}>
              <img src="https://images.unsplash.com/photo-1587135325273-adef4e88bc25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="ticket" className={styles.ticket__photo}/>
              <div className={styles.ticket__description}>
                <div className={styles.ticket__description__header}>
                  <h3 className={styles.ticket__description__title}>{ticket.title}</h3>
                  <h3 className={styles.ticket__description__price}>{ticket.price}€</h3>  
                </div>
                <p className={styles.ticket__description__content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi adipisci vitae esse obcaecati maiores quis suscipit. Dolorem mollitia rem error quibusdam dicta soluta ab nesciunt similique neque animi? Reiciendis.
                </p>
              </div>
              <div className={styles.ticket__cta}>       
                {purchaseBtn()}
              </div>
            </div>
          </div>



        </div>

      </div>

    </motion.div>

  )
}

// const TicketShow = ({ ticket, currentUser }) => {
//   const { doRequest, errors } = useRequest({
//     url: '/api/orders',
//     method: 'post',
//     body: {
//       ticketId: ticket.id,
//     },
//     onSuccess: (order) =>
//       Router.push('/orders/[orderId]', `/orders/${order.id}`),
//   });

//   const purchaseBtn = () => {
//     if (currentUser) {
//       return (
//         <button onClick={() => doRequest()} className="btn btn-warning">
//           Purchase
//         </button>
//       );
//     }

//     return (
//       <button
//         onClick={() => Router.push('/auth/signin')}
//         className="btn btn-warning"
//       >
//         Pruchase
//       </button>
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: '30px' }}
//       animate={{ opacity: 1, y: '0px' }}
//       exit={{ opacity: 0, y: '30px' }}
//     >
//       <h1 className="text-center text-light">Ticket details</h1>
//       <div className="card mb-3 mt-5" syle={{ mawWidth: '540px' }}>
//         <div className="row no-gutters">
//           <div className="col-md-4">
//             <img
//               src="https://images.unsplash.com/photo-1515139372923-c923c9e9a18c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
//               className="card-img"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title d-flex justify-content-between">
//                 <div>{ticket.title}</div>
//                 <div>{ticket.price}€</div>
//               </h2>
//               <p className="card-text">
//                 Aliquam nec dictum velit. Vivamus et ipsum mi. Phasellus id
//                 tristique ante. Praesent bibendum placerat tempus.
//               </p>
//               <div className="text-right mt-5 mr-3">{purchaseBtn()}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {errors}
//     </motion.div>
//   );
// };

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};


