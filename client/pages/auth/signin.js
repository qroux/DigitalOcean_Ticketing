import { useState } from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';
import styles from "../../styles/Form.module.scss"

import useRequest from '../../hooks/use-request';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
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
            <img src="/concert.svg" alt="concert.svg" className={styles.form__left__img}/>
          </div>
          <div className={styles.form__right}>
            <div className={styles.form__wrapper}>
              <h1 className={styles.form__heading}>Log In</h1>
              <form onSubmit={onSubmit} className={styles.form__form}>
                {errors}
                <div className={styles.form__row}>
                  <label htmlFor="email" className={styles.form__row__label}>Email</label>
                  <input
                    name="email"
                    placeholder="e-mail@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.form__row__input}
                  />
                </div>
                <div className={styles.form__row}>
                  <label htmlFor="password" className={styles.form__row__label}>Password</label>
                  <input
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={styles.form__row__input}
                  />
                </div>
                <button className={styles.form__button}>
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};
