import React, {useState} from 'react';
import logo from './images/logo.png'
import velo from './images/velo.png'
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const [modalState, setModelState] = useState('');

    return (
        <>
            <header>
                <div className="mainHeader widthContent">
                    <Link to="/" className="logo">
                        <img src={logo} alt={logo} />
                    </Link>
                    <ul className="menuHeader">
                        <li>
                            <Link to="/news">NEWS</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/products">PRODUCTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                    <ul className="userLinks">
                        <li>
                            <Link to="/">
                                <i className="far fa-user-circle" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fas fa-shopping-basket" />
                            </Link>
                        </li>
                    </ul>
                    <div className="menuBars">
                        <i className="fas fa-bars" onClick={() => setModelState('active')} />
                    </div>
                </div>
                {/*<div className="contentHeader widthContent">*/}
                {/*    <div className="headContentText">*/}
                {/*            <h2>Langing page</h2>*/}
                {/*            <p>Одностраничный сайт предоставляющий информацию об услугах и самой в более краткой форме в*/}
                {/*                виде сайта с главной страницей</p>*/}
                {/*            <Link to="/">more info</Link>*/}
                {/*        </div>*/}
                {/*        <div className="headContentImage">*/}
                {/*            <img src={velo} alt={velo} />*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </header>
            <div className={"modalMenu " + modalState}>
                <div className="modal">
                    <i className="fas fa-times" onClick={() => setModelState('')} />
                    <Link to="/">HOME</Link>
                    <Link to="/">ABOUT</Link>
                    <Link to="/">CONTACT</Link>
                    <Link to="/">CONTACT</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
