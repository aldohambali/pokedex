import {getPokemons, getFilterPokemon} from "../../api"

export const fetchPokemons = (page = 0) => async (dispatch, getState) => {
   const {listPokemons} = getState()
//    const posts = await getPosts(page, listArticle.posts);
    const results = await getPokemons(page, listPokemons.results);

   console.log('listPokemons : ',listPokemons)

   dispatch({
      type: "FETCH_RESULTS",
      payload: {
        results,
         loading: false
      }
   })
}

export const filterPokemons = () => async (dispatch, getState) => {
   const {filterPokemons} = getState()
   const types = await getFilterPokemon(filterPokemons);

   console.log('filterPokemons : ',types)

   dispatch({
     type: "FETCH_FILTER",
     payload: {
       types,
       loading: false
     }
   })
}

