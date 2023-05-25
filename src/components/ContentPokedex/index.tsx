import usePokemonContext from '../../hooks/usePokemonContext'
import { CardPokemon } from '../CardPokemon'
import styles from './index.module.css'

export const ContentPokedex = () => {

    const { count, offset, setOffset } = usePokemonContext()

    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.article_container}>
                    <h1 className={styles.h1_class}>{count}<strong> Pokemons</strong> for you to choose your favorite</h1>
                </article>
                <article className={styles.article_container_input}>
                    <input className={styles.input_container} type="text" placeholder="Find your Pokémon" />
                </article>
                <article className={styles.article_container_select}>
                    <select className={styles.select_container}>
                        <option disabled selected hidden>Type</option>
                    </select>
                </article>
                <CardPokemon />
            </main>
            <button
                onClick={() => setOffset(offset + 9)}
                className={styles.button}>Carregar mais</button>
        </section>
    )
}