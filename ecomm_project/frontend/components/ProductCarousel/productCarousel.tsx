import { Carousel, Card, CardImg, Stack } from 'react-bootstrap';
import style from "@/styles/Carousel.module.css"


export default function ProductCarousel() {
    return (
        <div>
        <div className="row text-center mt-5">
            <h2 className="display-6">Featured Products</h2>
            <p>See What's Trending Right Now</p>
        </div>
            <Carousel className="mb-5">
                <Carousel.Item>
                    <Stack direction="horizontal" className="justify-content-center align-items-center" gap={3}>
                        <Card className={style.productCard} >
                            <CardImg src="/NF_jacket.png" className={style.cardTop}/>
                            <Card.Body>
                                <Card.Text>The North Face Alta Vista Jacket <br/> $140.00 </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={style.productCard} >
                            <CardImg src="/Bontrager_Helmet.png" className={style.cardTop}/>
                            <Card.Body>
                                <Card.Text>Bontrager Solstice Bike Helmet<br/> $50.00 </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={style.productCard} >
                            <CardImg src="/Dragon_PXV2.png" className={style.cardTop}/>
                            <Card.Body>
                                <Card.Text>Dragon PXV2 Snow Goggles<br/> $240.00 </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={style.productCard} >
                            <CardImg src="/Baffin_boots.png" className={style.cardTop}/>
                            <Card.Body>
                                <Card.Text>Baffin Bobcaygeon Boots - Women's <br/> $130.00 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}