import { CardPokemon } from "../components/CardPokemon"
import { ContentPokedex } from "../components/ContentPokedex"
import { Header } from "../components/Header"

export const Pokedex = () => {
    return (
        <>
        <Header />
        <ContentPokedex />
        <CardPokemon />
        </>
    )
}