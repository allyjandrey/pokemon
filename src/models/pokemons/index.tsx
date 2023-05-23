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
    type: string,
    url: string
}

export type RequestInfoPokemon = {
    id: number,
    types: TypePokemon[],
    image: string,
    attack: number,
    defense: number
}