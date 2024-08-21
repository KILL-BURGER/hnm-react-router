import React, {useEffect, useState} from "react";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        const URL = `http://localhost:4000/products/${id}`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log('data', data);
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail();
    }, []);

    return <Container>
        <Row>
            <Col className='col-md-6 col-12 product-img'>
                <img src={product?.img} alt='상품이미지'/>
            </Col>
            <Col className='col-md-6 col-12'>
                <div className='product-info'>{product?.title}</div>
                <div className='product-info'>₩ {product?.price}</div>
                <div style={{fontSize:'11px'}}>{product?.choice ? 'Conscious choice' : ''}</div>
                <Dropdown className='drop-down'>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        사이즈 선택
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product?.size.map((item, index) => <Dropdown.Item href="#" key={index}>{item}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <div className='drop-down'>
                    <select>
                        <option>사이즈 선택</option>

                    </select>
                </div>
                <Button variant='dark' className='add-btn'>추가</Button>
            </Col>
        </Row>
    </Container>;
};

export default ProductDetail;