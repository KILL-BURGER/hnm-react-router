import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        const searchQuery = query.get('q') || '';
        console.log('쿼리값은?', searchQuery);
        const URL = `http://localhost:4000/products?q=${searchQuery}`;
        const response = await fetch(URL);
        const data = await response.json();
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, [query]);

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