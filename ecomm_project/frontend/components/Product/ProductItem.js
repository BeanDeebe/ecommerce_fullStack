import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';
import styles from "@/styles/Product.module.css";

export default function ProductItem({ product }) {
    return (
        <Card className={styles.product}>
            <div className={styles.imgContainer}>
                <CardImg src={product.imageUrl} />
            </div>
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>{product.description} <br/> ${product.price}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>

        </Card>
    )
}