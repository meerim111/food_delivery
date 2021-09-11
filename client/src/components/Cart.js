import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartAddRemove} from "../redux/actions/productActions";

const Cart = () => {
        const dispatch = useDispatch()
        const {cartList} = useSelector((s)=> s.products)

        const totalPrice = useSelector((s)=>Object.values(s.products.cartList).reduce((acc,it)=>{
                return acc + +it.price * it.quantity
        },0))
    return (
        <>
        <section className="container mx-auto p-8 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto sm:overflow-x-hidden">
                                <table className="w-full">
                                        <thead>
                                        <tr className="text-md font-bold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                                <th className="px-2 py-3 text-center">Название</th>
                                                <th className="px-2 py-3 text-center">Количество</th>
                                                <th className="px-2 py-3 text-center">Итого</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                        {
                                                Object.values(cartList).map((product)=>{
                                                  return<tr className="text-gray-700">
                                                          <td className="px-4 py-3 border">
                                                                  <div className="flex items-center text-sm">
                                                                          <div
                                                                              className=" w-8 h-8 mr-3 rounded-full md:block">
                                                                                  <img
                                                                                      className="object-cover w-full h-full rounded-full"
                                                                                      src={product.image}
                                                                                      alt={product.title} loading="lazy"/>
                                                                                  <div className="absolute inset-0 rounded-full shadow-inner"
                                                                                       aria-hidden="true"></div>
                                                                          </div>
                                                                          <div>
                                                                                  <p className="font-bold text-black">{product.title}</p>
                                                                                  <p className="text-xs text-gray-600">{product.price}</p>

                                                                          </div>
                                                                  </div>
                                                          </td>
                                                          <td className="px-4 py-3 text-ms font-semibold border">
                                                                  <div className="flex items-center justify-center">
                                                                          <button
                                                                              className="p-2 bg-yellow-700 font-bold"
                                                                              onClick={()=> dispatch(cartAddRemove(product,"remove"))}>
                                                                                  -
                                                                          </button>
                                                                          <input
                                                                              className="p-2 text-center outline-none"
                                                                              value={product.quantity}
                                                                              type="text"/>
                                                                          <button
                                                                              className="p-2 bg-green-700 font-bold"
                                                                              onClick={()=> dispatch(cartAddRemove(product,"add"))}>
                                                                                  +
                                                                          </button>
                                                                  </div>
                                                          </td>
                                                          <td className="px-4 py-3 text-xs border">
                                                                  <span
                                                                      className="px-2 py-1 font-bold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                                          {product.quantity * product.price}
                                                                  </span>
                                                          </td>

                                                  </tr>
                                                })
                                        }
                                        <tr className="text-gray-700">
                                                <td className="px-4 py-3 border">
                                                        <div className="flex items-center text-sm">
                                                                <div>
                                                                        <p className=" font-bold text-black text-center"> Общая стоимость товаров в корзине</p>
                                                                </div>
                                                        </div>
                                                </td>
                                                <td className="px-4 py-3 text-ms font-semibold border">
                                                        <div className="flex items-center justify-center my-1">
                                                                <button
                                                                    className="p-2 bg-red-400 font-bold text-black rounded-xl"
                                                                    onClick={()=> dispatch(cartAddRemove({},"delete_all"))}
                                                                >
                                                                       Очистить корзину
                                                                </button>
                                                        </div>
                                                </td>
                                                <td className="px-4 py-3 text-xs border">
                                                        <span
                                                            className="px-2 py-1 font-bold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                                {totalPrice}
                                                        </span>
                                                </td>
                                        </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
        </section>
                </>
    );
};

export default Cart;