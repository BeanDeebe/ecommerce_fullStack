import style from "@/styles/Footer.module.css"
import Link from "next/link";

export default function Footer() {
    return (
        <div className={style.bgColor}>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2">
                        <h3>Duck</h3>
                    </div>
                    <div className="col-2 mt-2">
                        <p>Products</p>
                        <ul className={style.unorderedList}>
                            <li>
                                <Link href="#">
                                    Outerwear
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Footwear
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Snow
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Cycling
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mt-2 mx-auto">
                        <ul className={style.unorderedList}>
                            <p>Company</p>
                            <li>
                                <Link href="#">
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#">

                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-4 mt-2">
                        <p className="lead">
                            Join our Newsletter!
                        </p>
                        <p className={style.newsLetterText}>
                        Sign up to our Newsletter to hear about new product releases, learn about our design process, and everything else going on behind the scenes at Duck.
                        </p>
                        <div className={style.newsletterSubmit}>
                            <form>
                                <label>
                                    <input type="email" name="email" className={style.emailCollect} placeholder="Enter your email" />
                                </label>
                                <input type="submit" value="Submit" className={style.submitBtn}/>
                            </form>
                        </div>
                    </div>
                    <div className="col-6 mt-2">
                    </div>
                    
                </div>
            </div>
            <p className={style.signOff}>Created by <a href="http://www.linkedin.com/in/deanbeebe">Dean Beebe</a></p>
        </div>
    )
}