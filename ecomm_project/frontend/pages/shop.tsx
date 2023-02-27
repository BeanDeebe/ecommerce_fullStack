import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "@/styles/Shop.module.css";
import Image from "next/image";
import ProductGrid from "@/components/Product/ProductGrid";

export default function Shop() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.jumbotron}>
                <h1>New Styles, Every Month.</h1>
            </div>
            <ProductGrid />
            <Footer />
        </div>
    )
}