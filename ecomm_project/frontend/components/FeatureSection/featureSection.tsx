import style from "@/styles/Home.module.css";
import { Card, Button, CardImg} from 'react-bootstrap';

export default function FeatureSection() {

    return (
        <div className="text-center mt-5">
          <h2 className="display-6">Outdoor equipment that inspires.</h2>
          <p className="lead">Find the right gear for your favorite outdoor activities.</p>
          <Button className={style.generalButton}>Get Started</Button>
          <div className="row">
            <Card className={style.cardLeft}>
              <CardImg src="/bicycling.jpg"/>
              <Card.Body>
                <Card.Title>Cycling gear you'll love.</Card.Title>
                <Button className={style.cardButtonLeft}>Learn More</Button>
              </Card.Body>
            </Card>
            <Card className={style.cardRight}>
              <CardImg src="/snow_running.jpg"/>
              <Card.Body>
                <Card.Title>Running attire to keep you warm.</Card.Title>
                <Button className={style.cardButtonRight}>Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
    )
}