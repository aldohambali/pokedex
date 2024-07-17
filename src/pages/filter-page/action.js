import {getFilterDetailPokemon} from "../../api"

export const filterDetailPokemons = (id) => async dispatch => {
  const detail = await getFilterDetailPokemon(id)
   console.log('detail filter pokemon : ',detail)
  dispatch({
     type: "FETCH_FILTER_DETAIL",
     payload: {
        detail,
        loading: false
     }
  })
}
