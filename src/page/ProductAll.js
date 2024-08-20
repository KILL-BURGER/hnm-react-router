import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const URL = 'http://localhost:4000/products';
        const response = await fetch(URL);
        const data = await response.json();
        setProductList(data);
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
            <Container>
                <Row>
                    {productList.map((menu, index) => (
                        <Col md={3} sm={12} key={index}>
                            <ProductCard item={menu}/>
                        </Col>
                    ))}
                </Row>
            </Container>
    );
};

export default ProductAll;