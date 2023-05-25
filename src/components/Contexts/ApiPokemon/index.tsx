import { createContext } from 'react';
import { Pokemon } from '../../../models/pokemons'

type PokemonContextProviderProps = {
    children: React.ReactNode
}

export type PokemonContextProps = {
    pokemon: Pokemon[],
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>;

}

const DEFAULT_VALUE = {
    pokemon: [],
    setPokemon: () => [{}],
    count: 0,
    setCount: () => [],
}

const PokemonContext = createContext<PokemonContextProps>(DEFAULT_VALUE);


export default PokemonContext;