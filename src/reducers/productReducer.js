import { ADD_PRODUCT, GET_PRODUCTS } from "../actions/types";


const initialState = {
    productsData: null,
    isLoading:true,

}

const productReducer = (state = initialState, action)=>{
   console.log(action)
    switch(action.type ){
        case GET_PRODUCTS:
            return{
                ...state,
                productsData:action.payload,
                isLoading:false

            }
        case ADD_PRODUCT:
            return{
                ...state,

            }    
    }
    return state
   
}
export default productReducer;