import axios from "axios"
import axiosInstance from "./helper/axiosInstance"

const BASE_URL = 'https://pokeapi.co/api/v2/'
const limit = 16

export const getPokemons = (page, currentState = []) => new Promise(resolve => {
   axiosInstance
      .get(BASE_URL + `pokemon?limit=${limit}&offset=${limit * page}`)
      .then(({data}) => {
         console.log('data pokemon : ',data)

         const snippet = data.results.map(post => ({
            url: post.url,
            name: post.name,
         }));
         const newData = currentState.concat(snippet)
         resolve(newData.filter(data => data))
      })
      .catch((err) => console.log(err));
})

export const getDetailPokemon = (id, currentState = [])  => new Promise(resolve => {
   axiosInstance
      .get( BASE_URL +'/pokemon/'+  id )
      .then(({data}) => {
         console.log('data detail pokemon : ',data)
         resolve(data)

         const detail = data.results.map(res => ({
            abilities: res.abilities,
            base_experience: res.base_experience,
            cries: res.cries,
            forms: res.forms,
            game_indices: res.game_indices,
            height: res.height,
            held_items: res.held_items,
            id: res.id,
            is_default: res.is_default,
            location_area_encounters: res.location_area_encounters,
            moves: res.moves,
            name: res.name,
            order: res.order,
            past_abilities: res.past_abilities,
            past_types: res.past_types,
            species: res.species,
            sprites: res.sprites,
            types: res.types,
            weight: res.weight,
         }));
         const newData = currentState.concat(detail)
         resolve(newData.filter(data => data))


      })
      .catch((err) => console.log(err));
})

export const getFilterPokemon = (currentState = []) => new Promise(resolve => {
    axiosInstance
       .get( BASE_URL + 'type/')
       .then(({data}) => {
            console.log('data filter pokemon : ',data)

            const snippet = data.results.map(post => ({
            url: post.url,
            name: post.name,
            }));
            const newData = currentState.concat(snippet)
            resolve(newData.filter(data => data))
        })
       .catch((err) => console.log(err));
 })

 export const getFilterDetailPokemon = (id,currentState = []) => new Promise(resolve => {
   axiosInstance
      .get( BASE_URL + 'type/'+id)
      .then(({data}) => {
           console.log('data filter pokemon : ',data)

           const snippet = data.pokemon.map(post => ({
           url: post.pokemon.url,
           name: post.pokemon.name,
           }));
           const newData = currentState.concat(snippet)
           resolve(newData.filter(data => data))
       })
      .catch((err) => console.log(err));
})