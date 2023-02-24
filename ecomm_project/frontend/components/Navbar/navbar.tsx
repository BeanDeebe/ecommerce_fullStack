import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <div className="container-fluid navbarFix">
            <nav className="navbar navbar-expand">
                <div className="ms-2 container-fluid">
                    <div className="navbar-nav">
                        <div className="nav-item p-3">
                            <span >
                            <Link href="/shop" className="text-decoration-none text-dark">Shop</Link>
                            </span>
                        </div>
                        <div className="nav-item p-3">
                            <Link className="text-decoration-none text-dark" href="/explore">Explore</Link>
                        </div>
                    </div>
                        <div className="navbar-brand text-dark">
                            <h2>Duck</h2>
                        </div>
                    <div className="nav-item mr-auto p-3">
                        <Link className="text-dark text-decoration-none" href="/cart">My Cart</Link>
                    </div>
                </div>
            </nav>
        </div>  
        </>
    )
}
