import styles from '../styles/Homepage.module.scss'
import NewTicket from './tickets/new';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage({ currentUser, tickets }) {
  const link = currentUser ?
    <Link href="/tickets/new"><a className={styles.empty__link}>Sell yours</a></Link> :
    <Link href="/auth/signin"><a className={styles.empty__link}>Sell yours</a></Link>; 

  const ticketList = tickets.length <= 0 ?
  <div className={styles.empty__container}>
    <img src='/empty.svg' className={styles.empty__img}/>
    <h4 className={styles.empty__heading}>No ticket yet. {link}</h4>
    </div> :
  tickets.map((ticket) => {
    return (      
        <div className={styles.tickets__item} key={ticket.id}>
          <img src="/tickets.svg" alt="ticket.svg" className={styles.tickets__item__icon} />
          <div className={styles.tickets__item__title}>{ticket.title}</div>
          <div className={styles.tickets__item__price}>{ticket.price}€</div>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a><img src="/description.svg" alt="" className={styles.tickets__item__click}/></a>
          </Link>        
        </div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
      <div className={styles.home__layout}>
        <div className={styles.home__container}>
          <h1 className={styles.home__heading}>Buy / Sell your tickets in minutes</h1>
        </div>
        <div className={styles.tickets__layout}>
          <div className={styles.tickets__container}>
            <h3 className={styles.tickets__heading}>Last Tickets</h3>
            <div className={styles.tickets__items}>
              {ticketList}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};
