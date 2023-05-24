export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: TypePokemon[],
    image: string,
    attack: number,
    defense: number
}

export type TypePokemon = {
    type: {
        name: string
    }
}

export type PokemonTypes = 'stile' | 'dark' | 'rock'
    | 'grass' | 'bug'
    | 'ice' | 'water'
    | 'fire' | 'fighting' | 'dragon'
    | 'normal' | 'gosth'
    | 'poison' | 'psychic' | 'fairy' | 'ghost'
    | 'ground'
    | 'electric'
    | 'flying';

export type RequestInfoPokemon = {
    id: number,
    types: TypePokemon[],
    image: string,
    attack: number,
    defense: number
}