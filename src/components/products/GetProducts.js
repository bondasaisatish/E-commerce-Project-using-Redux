import React, { useEffect, useState } from 'react'
import { getProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const GetProducts = () => {
  const [productsState,setProductsState] =useState(null)
  const reducerProducts = useSelector((state)=>state.pr)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
      },[])

      useEffect(()=>{
        setProductsState(reducerProducts)
      },[reducerProducts])

    if(productsState==null){
      return <p>loading...</p>
    }

    

  return (
    <div>GetProducts
    <ul>
    {
          productsState.productsData != null && productsState.productsData.map((el,i) => {
            return (
             <li>{el.id}{el.title}</li>
            )
          })
        }
    </ul>
    </div>
  )
} 

export default GetProducts;
