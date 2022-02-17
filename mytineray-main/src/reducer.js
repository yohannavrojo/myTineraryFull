export const initialState = {
    cities:[]
}
export const actionType={
    CITIESDB:"CITIESDB"
}

const reducer = (state,action)=>{
    console.log(action)
    switch (action.type){
        case "CITIESDB":
            return{
                ...state,
                cities:action.cities
            }
            default: return state
    }
}

export default reducer;