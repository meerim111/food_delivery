import axios from "axios";
import t from "../actionTypes/productActionTypes"




 export const getProductList =() => {
    return (dispatch) => {
        axios.get('/api/v1/getProducts').then(({data}) => {
            dispatch({type: t.GET_PRODUCTS_LIST,data})
        })
    }
}

export const cartAddRemove = (data,action) => {
    return(dispatch,getState) => {
        const store = getState()
        const{ cartList }= store.products
        if( action === "delete_all"){
           return  dispatch({type:t.ADD_TO_CART,cartList:{}})
        }

        if( action=== "add"){
            if( data.id in cartList) {
                cartList[data.id] = {...data,quantity:(cartList[data.id].quantity +=1)}
            }else {
                cartList[data.id] = {...data,quantity: 1}
            }
        }else  if ( action === "remove") {
            if(data.id in cartList) {
                if (cartList[data.id].quantity > 1)
                    cartList[data.id] = {...data,quantity:(cartList[data.id].quantity -=1)}
            }else {
                delete cartList[data.id]
            }
        }
        dispatch({type:t.ADD_TO_CART,cartList})

    }
}