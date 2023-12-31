import css from './notification.module.css';

const Notification = ({ message }) => (
  <h2 className={css.message}>{message}</h2>
);

export default Notification;
