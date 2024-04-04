import styles from './Section.module.css';
import PropTypes from 'prop-types';

function Section({title, children}){
return(
    <section className={styles.section}>
        <div>
        <h2 className={styles.title}>{title}</h2>
        {children}
        </div>
       
    </section>
)
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
export default Section;