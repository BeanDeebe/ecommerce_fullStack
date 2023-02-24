import React from "react";
import style from "@/styles/Carousel.module.css"
import {useDispatch} from "react-redux";


const ProductFeedItem = (
    {
        product = {
            productName: "",
            price: 0,
        }
    }) => {
        const dispatch = useDispatch();
        return(
            <Card className={style.productCard} >
                <CardImg src="/NF_jacket.png" className={style.cardTop}/>
                <Card.Body>
                    <Card.Text>{product.productName}<br/> {product.price} </Card.Text>
                </Card.Body>
            </Card>
        )
    }

export default ProductFeedItem;