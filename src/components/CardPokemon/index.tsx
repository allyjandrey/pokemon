import styles from './index.module.css'

export const CardPokemon = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.article_container}>
                <h3>Pokemon</h3>
                <article className={styles.pokemon_stats}>
                    <span className={styles.circle}>119</span>
                    <span className={styles.circle}>119</span>
                </article>
            </article>
        </section>
    )
}