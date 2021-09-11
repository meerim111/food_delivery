import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductList } from "../redux/actions/productActions";
import ProductCard from "./common/ProductCard";


const Main = () => {
    const dispatch = useDispatch()
    const { productList,cartList } = useSelector((s) => s.products)


     useEffect(()=> {
        dispatch(getProductList())
    },[])


    return (
        <div className="container mx-auto my-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              productList.map((product)=>{
                  const quantity = product.id in cartList ? cartList[product.id].quantity: 0
                  return(
                      <ProductCard data={product} quantity={quantity}/>
                  )
              })
            }
        </div>
        </div>
    );
};

export default Main;