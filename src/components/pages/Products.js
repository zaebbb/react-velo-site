import React, {useEffect, useState} from 'react';
import card from './../images/card.png'
import {Link} from "react-router-dom";

const Products = () => {

    const [product, setProducts] = useState()

    const fetchData = async () => {
        let resultProducts = await fetch(process.env.REACT_APP_API + 'products', {
            method: "GET"
        })
        let parsing = resultProducts.json()
        parsing.then(res => setProducts(res)).catch(err => setProducts(err))
    }

    useEffect(() => {
        fetchData().then(r => {})
        let headSideFilter = document.querySelectorAll('.headSideFilter');
        let bodySideFilter = document.querySelectorAll('.bodySideFilter');
        if(typeof headSideFilter == 'object'){
            headSideFilter.forEach((el, i) => {
                el.addEventListener('click', e => {
                    if(el.textContent == headSideFilter[i].textContent){
                        bodySideFilter.forEach((elemBody, j) => {
                            if(i == j){
                                elemBody.classList.toggle('active');
                                el.classList.toggle('active')
                            }
                        })
                    }
                })
            })
        }

    }, [])

    return (
        <>
            <h1 className="titleText">Все товары</h1>
            <div className="contentProductPage">
                <div className="contentSidebar">
                    <h3>Снаряжение</h3>
                    <label htmlFor="checkbox_1">
                        <input type="checkbox" id="checkbox_1" />
                            <span>Чекбокс кликабельный / 137</span>
                    </label>
                    <label htmlFor="checkbox_2">
                        <input type="checkbox" id="checkbox_2" />
                            <span>Чекбокс кликабельный / 137</span>
                    </label>
                    <h3>Цена</h3>
                    <div className="priceInput">
                        <input type="text" placeholder="0" />
                            <span>-</span>
                        <input type="text" placeholder="100 000" />
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter active">
                            <h3>Бренд</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter active">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Стиль</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Возраст</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Сезон</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Материал</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Тип тормозов</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Назначение</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Уровень</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Скидка</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="sidebarMenuFilter">
                        <div className="headSideFilter">
                            <h3>Конструкция</h3>
                            <i className="fas fa-angle-up" />
                        </div>
                        <div className="bodySideFilter">
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                            <label htmlFor="checkbox_5">
                                <input type="checkbox" id="checkbox_5" />
                                    <span>Чекбокс кликабельный / 137</span>
                            </label>
                        </div>
                    </div>
                    <div className="buttonsFilter">
                        <button className="openFilter">Показать</button>
                        <button className="stopFilter">Сбросить</button>
                    </div>
                </div>


                {/* PRODUCTS */}
                <div className="contentProducts">
                    {
                        product && product.products.map((el, key) => {
                            return (
                                <Link className="product" to={'/products/' + el.id} key={key}>
                                    <img src={process.env.REACT_APP_API_IMAGE + 'images/products/' + el.images} alt='img' />
                                    <div className="infoProduct">
                                        <h2>{el.title}</h2>
                                        <p><b>Бренд:</b> {el.brand}</p>
                                        {Number(el.price_sale) > 0 ?
                                            <p className="price"><b>Цена: </b><span className="sale">{el.price} ₽</span> {el.price_sale} ₽</p> :
                                            <p className="price"><b>Цена: </b> {el.price} ₽</p>}
                                    </div>
                                    {Number(el.price_sale) > 0 ? <div className="saleCard">sale</div> : ''}
                                    <div className="exists">
                                        <i className="fas fa-check" />
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </>
);
};

export default Products;
