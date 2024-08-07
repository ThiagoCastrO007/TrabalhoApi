import styles from './Card.module.css'
import { Link } from 'react-router-dom'



function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Card
