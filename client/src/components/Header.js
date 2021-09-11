import React from 'react';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";



const Header = () => {
    const totalInCart = useSelector((s)=>Object.values(s.products.cartList).reduce((acc,it)=>{
       return acc + it.quantity
    },0))

    const totalPrice = useSelector((s)=>Object.values(s.products.cartList).reduce((acc,it)=>{
        return acc + +it.price * it.quantity
    },0))
    return (
       <header className="bg-green-800 p-6 sticky top-0 z-50 shadow-md">
           <div className="container mx-auto flex justify-between text-white font-medium text-lg">
               <div>
                <Link to="/" className="p-2 mr-2 hover:bg-yellow-700 rounded">
                    Главная
                </Link>
                <Link to="/cart" className="p-2 mr-2 hover:bg-yellow-700 rounded">
                    Корзина
                </Link>
               </div>
              <div>
                  <div>Количество:{totalInCart}шт</div>
                  <div>Итого:{totalPrice} $</div>
              </div>
           </div>
       </header>
    );
};

export default Header;