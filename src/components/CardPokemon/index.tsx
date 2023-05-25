import styles from './index.module.css'
import { PokemonTypes } from '../../models/pokemons'
import { useContext } from 'react'
import PokemonContext from '../Contexts/ContextPokemon'

export const CardPokemon = () => {
    const { pokemon } = useContext(PokemonContext)

    const PokemonTypeColors: Record<PokemonTypes, string> = {

        stile: '#A1A1A1', dark: '#A1A1A1', rock: '#A1A1A1',
        grass: '#70A83B', bug: '#70A83B',
        ice: '#A2CFF0', water: '#A2CFF0',
        fire: '#F76745',
        fighting: '#F76745', dragon: '#F76745',
        normal: '#76AADB', gosth: '#76AADB',
        poison: '#A974BC', psychic: '#A974BC', fairy: '#A974BC', ghost: '#A974BC',
        ground: '#9B597B',
        electric: '#F7C545',
        flying: '#A890F0'
    }

    return (
        <article className={styles.article_container}>
            {pokemon.map((poke) => (
                <article className={styles.card_container}>
                    <article className={styles.card_container_left}>
                        <article className={styles.card_name}>
                            <h3>{poke.name}</h3>
                        </article>
                        <article className={styles.card_stats}>
                            <span className={styles.card_circle}>{poke.attack}</span>
                            <span className={styles.card_circle}>{poke.defense}</span>
                        </article>
                        <article className={styles.card_attributes}>
                            <h6>Attack</h6>
                            <h6>Defense</h6>
                        </article>
                        <article className={styles.card_pokemon}>
                            <span
                                style={{ backgroundColor: PokemonTypeColors[poke.types[0].type.name as PokemonTypes] }}
                                className={styles.pokemon_element}>{poke.types[0].type.name}</span>
                            <span
                                style={{
                                    backgroundColor: poke.types.length == 2
                                        ? PokemonTypeColors[poke.types[1].type.name as PokemonTypes]
                                        : PokemonTypeColors[poke.types[0].type.name as PokemonTypes]
                                }}
                                className={styles.pokemon_element}>
                                {poke.types.length == 2 ? poke.types[1].type.name : poke.types[0].type.name}
                            </span>
                        </article>
                    </article>
                    <article
                        style={{ backgroundColor: PokemonTypeColors[poke.types[0].type.name as PokemonTypes] }}
                        className={styles.card_container_right}>
                        <img src={poke.image} alt="Imagem do card" className={styles.pokemon_container} />
                    </article>
                </article>
            ))};
        </article>
    )
}