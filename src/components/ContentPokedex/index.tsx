import styles from './index.module.css'

export const ContentPokedex = () => {
    return (
        <section>
            <article>
                <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            </article>
            <article>
            <input className={styles.input_container} type="text" placeholder="Find your Pokemon"/>
            </article>
        </section>
    )
}