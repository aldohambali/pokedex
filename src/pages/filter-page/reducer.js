const initialState = {
    detail: {
      pokemon: [],
    },
    loading: true
 }
 
 export default (state, action) => {
   console.log('action.type : ',action.type)
    switch (action.type) {
       case "FETCH_FILTER_DETAIL":
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