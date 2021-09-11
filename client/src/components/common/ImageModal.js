import React from 'react';

const ImageModal = ({image,onClick}) => {
    return (
        <div onClick={onClick} className=" fixed top-0 right-0 bg-black bg-opacity-75 z-20">
        <div className="flex items-center justify-center  h-screen w-screen">
           <div>
               <img className="cursor-pointer" title="Закрыть" src={image} alt=""/>
           </div>
        </div>
            </div>
    );
};

export default ImageModal;