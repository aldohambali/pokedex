import {getDetailPokemon} from "../../api"

export const detailPokemon = (id) => async dispatch => {
   const detail = await getDetailPokemon(id)
    console.log('detail pokemon : ',detail)
   dispatch({
      type: "FETCH_DETAIL",
      payload: {
         detail,
         loading: false
      }
   })
}