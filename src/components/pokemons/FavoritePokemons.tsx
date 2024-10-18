import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemon = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    return favoritePokemon;
}

export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 pt-5">
            <For each={ pokemons() }>
                { (pokemon) =>  <FavoritePokemonCard pokemon={pokemon}/> }
            </For>
        </div>
    )
}