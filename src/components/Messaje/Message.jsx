import styles from './Message.module.css';
import PropTypes from 'prop-types';

function  Notification ({message}){
    return  <p className={styles.message}>{message}</p>
}
Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification;