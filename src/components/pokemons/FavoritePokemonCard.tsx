import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { createSignal, Show, type Component } from "solid-js";


interface Props {
    pokemon: FavoritePokemon;
}


export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {

    const [isVisible, setIsVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];
        const newFavorites = favorites.filter(p => p.id !== pokemon.id)

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsVisible(false);
    }


    return (
        <Show when={isVisible()}>
            <div class="flex flex-col ml-2 mb-2 p-1 justify-center items-center border rounded ">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img 
                        src={ imageSrc} 
                            alt={pokemon.name} 
                            width="96" 
                            height="96" 
                            style={`view-transition-name: ${pokemon.name}-image`}
                        />
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button onClick={deleteFavorite} class="bg-red-900 p-1 mt-2 rounded-md text-white">
                    Borrar
                </button>
            </div>
        </Show>
    );
}