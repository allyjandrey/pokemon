import styles from './index.module.css'
import teamRocket from '../../assets/Team-Rocket.svg'

export const NotFound = () => {
    return (
        <section className={styles.section_container}>
            <h1>404</h1>
            <img src={teamRocket} alt="Imagem da equipe Rocket" />
            <h3 className={styles.white_text}>The rocket team</h3>
            <h3 className={styles.black_text}>has won this time</h3>
            <button>Return</button>
        </section>
    )
}