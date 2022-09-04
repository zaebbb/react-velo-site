import React, {useEffect, useState} from 'react';
import part_1 from './../images/part_1.png'
import part_2 from './../images/part_2.png'
import part_3 from './../images/part_3.png'
import part_4 from './../images/part_4.png'
import part_5 from './../images/part_5.png'
import part_6 from './../images/part_6.png'
import card from './../images/card.png'
import {Link} from "react-router-dom";
import velo from "../images/velo.png";

const Main = () => {
    const [popularCard, setPopularCard] = useState()
    const [fiveNews, setFiveNews] = useState()

    const fetchData = async () => {
        const resultProducts = await fetch( process.env.REACT_APP_API + 'products',{
            method: 'GET'
        })
        let parsing = resultProducts.json()
        parsing.then(res => setPopularCard(res)).catch(err => setPopularCard(err))

        const resultNews = await fetch(process.env.REACT_APP_API + 'news', {
            method: 'GET'
        })
        parsing = resultNews.json()
        parsing.then(res => setFiveNews(res)).catch(err => setFiveNews(err))
    }

    useEffect(() => {
        fetchData().then(r => {})
    }, [])

    return (
        <>
            <div className="popularProd">
                <h1 className="titleText">Популярные товары</h1>
                <div className="popularCards">
                    {
                        popularCard && popularCard.products.map((elem, key) => {
                            if(key > 4){
                                return ''
                            } else {
                                return (
                                    <a href={'/products/' + elem.id} className="popularCard" key={key}>

                                        {
                                            elem.price_sale != 0 ?
                                                <div className="saleCard">sale</div> :
                                                ''
                                        }
                                        <h2>{elem.title}</h2>
                                        <p><b>Бренд:</b> {elem.brand}</p>
                                        <p><b>Сезон:</b> 2021</p>
                                        {
                                            elem.price_sale != 0 ?
                                                <p className="price"><span
                                                    className="sale">{elem.price} ₽</span> {elem.price_sale} ₽ </p> :
                                                <p className="price">{elem.price} ₽</p>
                                        }
                                        <img src={`${process.env.REACT_APP_API_IMAGE}images/products/${elem.images}`} alt={"cardImage"}/>
                                        <div className="exists">
                                            <i className="fas fa-check"/>
                                        </div>
                                    </a>
                                )
                            }
                        })
                    }
                </div>
                <div className="morePlus">
                    <h2>больше популярных товаров</h2>
                    <a href="/products">больше</a>
                </div>
            </div>

            <div className="sezonsProd">
                <h1 className="titleText">Товары сезона</h1>
                <div className="popularCards">
                    <a href="/" className="popularCard">
                        <div className="saleCard">sezon</div>
                        <h2>Горный велосипед</h2>
                        <p><b>Бренд:</b> Cannondale</p>
                        <p><b>Сезон:</b> 2021</p>
                        <p className="price">658 520 ₽</p>
                        <img src={card} alt={card} />
                            <div className="exists">
                                <i className="fas fa-check" />
                            </div>
                    </a>
                </div>
                <div className="morePlus">
                    <h2>больше сезонных товаров</h2>
                    <a href="/products">больше</a>
                </div>
            </div>

            <div className="newsSite">
                <h1 className="titleText">Новости</h1>
                <div className="newsCards">
                    {
                        fiveNews && fiveNews.news.map((elem, key) => {
                            if(key > 4){
                                return ''
                            } else {
                                return (
                                    <div className="newCard" key={key}>
                                        <div className="headNews">
                                            <h2>{elem.title}</h2>
                                            <a href={'/news/' + elem.id}>перейти</a>
                                        </div>
                                        <div className="bodyNews">
                                            <p>
                                                <span className="text">{elem.descr}</span> /
                                                <b><span className="time"> {elem.created_at.substr(0,10)}</span></b></p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="partnersProd">
                <h1 className="titleText">Наши партнеры</h1>
                <div className="partnersProd">
                    <img src={part_1} alt={part_1} />
                    <img src={part_2} alt={part_2} />
                    <img src={part_3} alt={part_3} />
                    <img src={part_4} alt={part_4} />
                    <img src={part_5} alt={part_5} />
                    <img src={part_6} alt={part_6} />
                    <img src={part_1} alt={part_1} />
                    <img src={part_2} alt={part_2} />
                    <img src={part_3} alt={part_3} />
                    <img src={part_4} alt={part_4} />
                    <img src={part_5} alt={part_5} />
                    <img src={part_6} alt={part_6} />
                </div>
            </div>
        </>
    );
};

export default Main;
