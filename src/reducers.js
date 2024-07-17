import { combineReducers } from "redux"

import pokemonsReducer from "./pages/front-page/reducer";
import detailpokemonReducer from  "./pages/detail-page/reducer";
import filterpokemonsReducer from "./pages/filter-page/reducer";

export default combineReducers({
   listPokemons: pokemonsReducer,
   detailPokemon: detailpokemonReducer,
   filterDetailPokemons: filterpokemonsReducer,
})

