import { ContentPokedex } from "../components/ContentPokedex"
import { PokemonContextProvider } from "../components/Contexts/ContextPokemon"
import { Header } from "../components/Header"

export const Pokedex = () => {
    return (
        <PokemonContextProvider>
            <Header />
            <ContentPokedex />
        </PokemonContextProvider>
    )
}