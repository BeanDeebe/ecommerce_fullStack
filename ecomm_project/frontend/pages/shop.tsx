import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "@/styles/Shop.module.css";
import ProductGrid from "@/components/Product/ProductGrid";

export default function Shop() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.jumbotron}>
                <div>
                    <h1>New Styles, Every Month.</h1>
                </div>
            </div>
            <ProductGrid />
            <Footer />
        </div>
    )
}