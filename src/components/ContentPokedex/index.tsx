import styles from './index.module.css'

export const ContentPokedex = () => {
    return (
        <section className={styles.section_container}>
            <article>
                <h1 className={styles.h1_class}>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            </article>
            <article>
            <input className={styles.input_container} type="text" placeholder="Find your Pokemon"/>
            </article>
        </section>
    )
}