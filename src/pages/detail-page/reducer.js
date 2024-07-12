const initialState = {
   //  detail: {},
    detail: {
      "abilities": [],
      "base_experience": 0,
      "cries": {},
      "forms": [],
      "game_indices": [],
      "height": 0,
      "held_items": [],
      "id": 22,
      "is_default": true,
      "location_area_encounters": "",
      "moves": [],
      "name": "",
      "order": 31,
      "past_abilities": [],
      "past_types": [],
      "species": {},
      "sprites": {},
      "stats": [
         {
            base_stat:0,
            stat:{},
            effort:0
         }
      ],
      "types": [],
      "weight": 0
    },
    loading: true
 }
 
 export default (state, action) => {
    switch (action.type) {
       case "FETCH_DETAIL":
          return {
             ...state,
             ...action.payload
          }
    
       default:
          return {
             ...state,
             ...initialState
          }
    }
 }