// import {getPosts} from "../../api"
import {getPokemons} from "../../api"

export const fetchPokemons = (page = 1) => async (dispatch, getState) => {
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

