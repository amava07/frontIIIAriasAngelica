import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.card}>
            <p>{props.children}</p>

        </div>
    )

}

export default Card;