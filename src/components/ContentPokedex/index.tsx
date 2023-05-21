import styles from './index.module.css'

export const ContentPokedex = () => {
    return (
        <section className={styles.section_container}>
            <main>
                <article>
                    <h1 className={styles.h1_class}>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
                </article>
                <article>
                    <input className={styles.input_container} type="text" placeholder="Find your Pokemon" />
                </article>
                <article>
                    <select>
                        <option>Type</option>
                    </select>
                    <select>
                        <option>Attack</option>
                    </select>
                    <select>
                        <option>Experience</option>
                    </select>
                </article>
            </main>
        </section>
    )
}