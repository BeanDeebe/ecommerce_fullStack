import { useState, useEffect} from 'react';
import React from 'react';
import { Carousel, Card, CardImg, Stack } from 'react-bootstrap';
import style from "@/styles/Carousel.module.css"
import Product from "../../../backend/models/products/product";

export default function ProductCarousel() {
    const [products, setProducts] = useState<Product[]>([]);
    
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
    <div>
        <div className="row text-center mt-5">
            <h2 className="display-6">Featured Products</h2>
            <p>See What's Trending Right Now</p>
        </div>
        <div>
            <Carousel className="mb-5 p-3" variant="dark">
            {products.map(product => (
                <Carousel.Item>
                    <Stack direction="horizontal" className="justify-content-center align-items-center">
                        <Card className={style.productCard} >
                            <CardImg src={product.imageUrl} className={style.cardTop}/>
                            <Card.Body>
                                <Card.Text>{product.productName} <br/> ${product.price} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
        </div>
    )
}