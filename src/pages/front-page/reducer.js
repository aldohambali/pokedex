const initialState = {
    loading: true,
    results: [],
    types: []
 }
 
 export default (state, action) => {
    switch (action.type) {
       case "FETCH_RESULTS":
          return {
             ...state,
             ...action.payload
          }
       case "FETCH_FILTER":
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