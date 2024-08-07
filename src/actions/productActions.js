import { API } from "../consants"
import { GET_PRODUCTS } from "./types"


export const getProducts = () =>async dispatch => {
    const api= await fetch(API + 'products')
    const data= await api.json()
    dispatch({type:GET_PRODUCTS,payload:data})

}

// Note here  dispatch() expects 2. first type and second is payload   

//  we have to send payload  from productAction to ProductReducer  like action.data