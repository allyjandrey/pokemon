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
            const response = await api.get('pokemon/?limit=9')
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
            setPokemons(dataPokemons);
        }
        getPokemons()
    }, [])

    const PokemonTypeColors = {

        stile: '#A1A1A1',
        dark: '#A1A1A1',
        rock: '#A1A1A1',
        grass: '#70A83B',
        bug: '#70A83B',
        ice: '#A2CFF0',
        water: '#A2CFF0',
        fire: '#F76745',
        fighting: '#F76745',
        dragon: '#F76745',
        normal: '#76AADB',
        gosth: '#76AADB',
        poison: '#A974BC',
        psychic: '#A974BC',
        fairy: '#A974BC',
        ghost: '#A974BC',
        ground: '#9B597B',
        electric: '#F7C545',
        flying: '#A890F0'
    }

    return (
        <article className={styles.article_container}>
            {Pokemons.map((poke) => (
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
                                style={{ backgroundColor: PokemonTypeColors[poke.types[0].type.name] }}
                                className={styles.pokemon_element}>{poke.types[0].type.name}</span>
                            <span
                                style={{
                                    backgroundColor: poke.types.length == 2
                                        ? PokemonTypeColors[poke.types[1].type.name]
                                        : PokemonTypeColors[poke.types[0].type.name]
                                }}
                                className={styles.pokemon_element}>
                                {poke.types.length == 2 ? poke.types[1].type.name : poke.types[0].type.name}
                            </span>
                        </article>
                    </article>
                    <article
                        style={{ backgroundColor: PokemonTypeColors[poke.types[0].type.name] }}
                        className={styles.card_container_right}>
                        <img src={poke.image} alt="Imagem do card" className={styles.pokemon_container} />
                    </article>
                </article>
            ))};
        </article>
    )
}