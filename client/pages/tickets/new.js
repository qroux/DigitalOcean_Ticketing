import { useState } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import { motion } from 'framer-motion';
import styles from '../../styles/Form.module.scss'

export default function NewTicket() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: { title, price },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);
    isNaN(value) ? setPrice(0) : setPrice(value.toFixed(2));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '30px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '30px' }}
    >
            <div className={styles.form__layout}>
        <div className={styles.form__container}>
          <div className={styles.form__left}>
            {/* <h3 className={styles.form__left__heading}>Welcome</h3> */}
            <img src="/tickets.svg" alt="ticket.svg" className={styles.form__left__img}/>

          </div>
          <div className={styles.form__right}>
            <div className={styles.form__wrapper}>
              <h1 className={styles.form__heading}>Sell your ticket</h1>
              <form onSubmit={onSubmit} className={styles.form__form}>
                {errors}
                <div className={styles.form__row}>
                  <label htmlFor="title" className={styles.form__row__label}>Title</label>
                  <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    name="title"             
                    className={styles.form__row__input}
                  />
                </div>
                <div className={styles.form__row}>
                  <label htmlFor="price" className={styles.form__row__label}>Price</label>
                  <input
                    name="price"
                    placeholder="45.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={onBlur}
                    
                    className={styles.form__row__input}
                  />
                </div>
                <button className={styles.form__button}>
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};


// export default function NewTicket() {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/tickets',
//     method: 'post',
//     body: { title, price },
//     onSuccess: () => Router.push('/'),
//   });

//   const onSubmit = (event) => {
//     event.preventDefault();
//     doRequest();
//   };

//   const onBlur = () => {
//     const value = parseFloat(price);
//     isNaN(value) ? setPrice(0) : setPrice(value.toFixed(2));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: '30px' }}
//       animate={{ opacity: 1, y: '0px' }}
//       exit={{ opacity: 0, y: '30px' }}
//     >
//       <h1 className="text-center text-light">Sell your ticket</h1>
//       <div className="mt-5 pt-4 pb-2 px-5">
//         {errors}
//         <form onSubmit={onSubmit}>
//           <div className="input-group">
//             <div className="input-group-prepend">
//               <span className="input-group-text">Aa</span>
//             </div>
//             <input
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="input-group my-2">
//             <div className="input-group-prepend">
//               <span className="input-group-text">$</span>
//             </div>
//             <input
//               placeholder="Price"
//               value={price}
//               onBlur={onBlur}
//               onChange={(e) => setPrice(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="text-center">
//             <button className="btn btn-warning">Submit</button>
//           </div>
//         </form>
//       </div>
//     </motion.div>
//   );
// };
