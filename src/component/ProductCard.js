import React from "react";

const ProductCard = ({item}) => {
    return <div className="card">
        <img src={item?.img} alt='상품 이미지'/>
        <div>{item?.choice ? 'Conscious choice' : ''}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new ? '신제품' : ''}</div>
    </div>
};

export default ProductCard;