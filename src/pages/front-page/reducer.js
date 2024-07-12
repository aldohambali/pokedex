const initialState = {
    loading: true,
    results: []
 }
 
 export default (state, action) => {
    switch (action.type) {
       case "FETCH_RESULTS":
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