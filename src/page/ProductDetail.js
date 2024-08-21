import React from "react";
import {Button, Container} from "react-bootstrap";

const ProductDetail = () => {

    return <Container>
        <div>
            <img src='#' alt='상품 이미지'/>
            <h2>상품명</h2>
            <h4>₩200000</h4>
            <span>Conscious choice</span>
            <select>
                <option>사이즈 선택</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>
            <Button variant='dark'>추가</Button>
        </div>
    </Container>;
};

export default ProductDetail;