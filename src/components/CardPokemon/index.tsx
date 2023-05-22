import styles from './index.module.css'

export const CardPokemon = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.article_container}>
                <h3>Pokemon</h3>
                <article className={styles.pokemon_stats}>
                    <span className={styles.circle}></span>
                    <h6>Attack</h6>
                </article>
                <article className={styles.pokemon_stats}>
                    <span className={styles.circle}></span>
                    <h6>Defense</h6>
                </article>
            </article>
        </section>
    )
}