import { useContext } from "react"
import PokemonContext, { PokemonContextProps } from "../../components/Contexts/ContextPokemon"

const usePokemonContext = () => {
    const pokemonContext = useContext<PokemonContextProps>(PokemonContext);

    return pokemonContext;
}