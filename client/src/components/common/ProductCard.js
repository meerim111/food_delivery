import React, {useState} from 'react';
import ImageModal from "./ImageModal";
import {cartAddRemove} from "../../redux/actions/productActions";
import {useDispatch} from "react-redux";


const ProductCard = ({data,quantity}) => {
    const dispatch= useDispatch()
    const[modal,setModal] = useState(false)

    const imageClick = () =>{
            document.body.style.overflow = 'hidden'
        setModal(true)
    }

    const closeModal = () => {
        document.body.style.overflow = 'auto'
        setModal(false)
    }
    return (
        <>
        <div className=" bg-gray-300 border border-gray-200 rounded-xl">
            <img
                src={data.image}
                alt=""
                className="cursor-pointer block h-64 w-full object-cover rounded-xl"
                onClick={imageClick}
            />
            <div className="text-center font-bold py-2">{data.title}</div>
            <div className="text-center">{data.price}$</div>
            <div className="flex items-center justify-center">
                <button className="p-2 bg-yellow-700 font-bold" onClick={()=> dispatch(cartAddRemove(data,"remove"))}>
                    -
                </button>
                <input
                    className="p-2 text-center outline-none"
                    value={quantity}
                    type="text"/>
                <button className="p-2 bg-green-700 font-bold" onClick={()=> dispatch(cartAddRemove(data,"add"))}>
                    +
                </button>
            </div>
        </div>
            {modal && <ImageModal image={data.image} onClick={closeModal}/>}
            </>
    );
};

export default ProductCard;