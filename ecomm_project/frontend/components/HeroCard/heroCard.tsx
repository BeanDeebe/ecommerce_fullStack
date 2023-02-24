import style from "@/styles/Hero.module.css"
import Image from "next/image";

export default function HeroCard() {

    return(
        <div>
          <div className={style.jumbotron}>
              <div className="container-fluid">
                <div className="row mt-5 mb-5" >
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h2 className="display-4">Shop around, stay awhile.</h2>
                    <p className="lead">New items updated weekly. <br/>Now offering international shipping on all orders.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}