import styles from "./Statistics.module.css"
import PropTypes from 'prop-types';

function Statistics ({good, neutral, bad, total, positivePercentage}){
    return(
        <div className={styles['stat-container']}> 
            <h3 className={styles['stat-title']}>Statistics</h3>
            <ul className={styles['stat-items']}>
                <li className={styles.item}>{`Good: ${good}`}</li>
                <li className={styles.item}>{`Neutral: ${neutral}`}</li>
                <li className={styles.item}>{`Bad: ${bad}`}</li>
                <li className={styles.item}>{`Total: ${total}`}</li>
                <li className={styles.item}>{`Positive feedback: ${positivePercentage}`}</li>
            </ul>
        </div>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
}
export default Statistics;