import styles from './index.module.css'
import teamRocket from '../../assets/Team-Rocket.svg'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className={styles.section_container}>
            <article>
                <h1 className={styles.error_number}>404</h1>
            </article>
            <article className={styles.article_container}>
                <img className={styles.img} src={teamRocket} alt="Imagem da equipe Rocket" />
                <article className={styles.text_container}>
                    <h3 className={styles.white_text}>The rocket team</h3>
                    <h3 className={styles.black_text}>has won this time</h3>
                </article>
                <NavLink to={`/`} className={styles.container_button}>
                    <button className={styles.button}><h6>Return</h6></button>
                </NavLink>
            </article>
        </section>
    )
}