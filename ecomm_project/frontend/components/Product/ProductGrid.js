import { useState, useEffect } from "react";
import styles from '@/styles/Product.module.css'
import ProductItem from '@/components/Product/ProductItem'
import {Row, Col} from 'react-bootstrap';

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/products', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles.productGrid}>
            <Row xs={1} md={4} className="g-4">
            {products.map(product => (
                    <Col>
                        <ProductItem key={product._id} product={product} />
                    </Col>
            ))}
            </Row>
        </div>
    )
}