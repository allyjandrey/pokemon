import styles from './index.module.css'
import { Pokemon, RequestInfoPokemon } from '../../models/pokemons'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export const CardPokemon = () => {
    const [Pokemons, setPokemons] = useState<Pokemon[]>([])

    async function GetInfoPokemons(url: string): Promise<RequestInfoPokemon> {
        const response = await api.get(url)
        const { id, types } = response.data;
        return {
            id,
            types,
            image: response.data.sprites.other.home.front_default,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat
        }
    }

    useEffect(() => {
        async function getPokemons() {
            const response = await api.get('pokemon/?limit=20&offset=20')
            const { results } = response.data;
            const dataPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const {
                        id,
                        types,
                        image,
                        attack,
                        defense
                    } = await GetInfoPokemons(pokemon.url);

                    return {
                        name: pokemon.name,
                        id,
                        types,
                        image,
                        attack,
                        defense
                    }
                })
            )
            console.log(dataPokemons);
            setPokemons(dataPokemons);
        }
        getPokemons()
    }, [])

    return (
        <section>
            {Pokemons.map((poke) => (
                <article className={styles.article_container}>
                    <h3>{poke.name}</h3>
                    <article className={styles.pokemon_stats}>
                        <span className={styles.circle}>{poke.attack}</span>
                        <h6>Attack</h6>
                    </article>
                    <article className={styles.pokemon_stats}>
                        <span className={styles.circle}>{poke.defense}</span>
                        <h6>Defense</h6>
                    </article>
                    <article className={styles.article_pokemon_element}>
                        <span className={styles.pokemon_element}></span>
                        <span className={styles.pokemon_element}></span>
                    </article>
                </article>
            ))}
        </section>
    )
}