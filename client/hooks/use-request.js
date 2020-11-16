import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/Error.module.scss'

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className={styles.error}>
          <h4 className={styles.error__heading}>Ooops....</h4>
          <ul className={styles.error__list}>
            {err.response.data.errors.map((err) => (
              <li key={err.message} className={styles.error__item}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
