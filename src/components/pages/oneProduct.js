import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import card from './../images/card.png'

const OneProduct = () => {

    const [oneProduct, setOneProduct] = useState()
    const [tables, setTables] = useState()
    const [news, setNews] = useState()
    const [products, setProducts] = useState()
    const [character, setCharacter] = useState([])

    function renderCharacter(){
        let arrData = [
            character[0].description_product,
            character[0].instruction_product,
            character[0].technology_product,
            character[0].brand_info_product
        ]
        let buttonsInfo = document.querySelectorAll('.buttonsInfo button');
        let blockTextAll = document.querySelector('.blockTextAll p');
        if(typeof buttonsInfo == 'object'){
            blockTextAll.innerHTML = arrData[0];
            buttonsInfo.forEach((el, i) => {
                el.addEventListener('click', () => {
                    clearEffectButtons();
                    el.classList.add('active');
                    blockTextAll.innerHTML = arrData[i];
                })
            })
        }
        function clearEffectButtons(){
            buttonsInfo.forEach(el => {
                el.classList.remove('active');
            })
        }
    }



    let {id} = useParams()
    const fetchData = async () => {
        let resultData = await fetch(`${process.env.REACT_APP_API}products/${id}`)
        let parsing = resultData.json();
        parsing.then(res => setOneProduct(res)).catch(err => setOneProduct(err))

        let resultDataTable = await fetch(`${process.env.REACT_APP_API}products/${id}/table`)
        parsing = resultDataTable.json()
        parsing.then(res => setTables(res)).catch(err => setTables(err))

        let resultDataNews = await fetch(`${process.env.REACT_APP_API}news`)
        parsing = resultDataNews.json()
        parsing.then(res => setNews(res)).catch(err => setNews(err))

        let resultDataProducts = await fetch(`${process.env.REACT_APP_API}products`)
        parsing = resultDataProducts.json()
        parsing.then(res => setProducts(res)).catch(err => setProducts(err))

        let resultDataMoreInfo = await fetch(`${process.env.REACT_APP_API}products/${id}/character`)
        parsing = resultDataMoreInfo.json()
        parsing.then(res => {
            setCharacter(res.characteristic)
            console.log(character)
            renderCharacter()
        })
    }

    useEffect(() => {
        fetchData().then(r => {})
    }, [])

    return (
        <div>
            {
                oneProduct && oneProduct.product ?
                    <>
                        <h1 className='titleText'>{oneProduct.product.title}</h1>

                        <div className="productInfo">
                            <div className="imageProduct">
                                <img src={process.env.REACT_APP_API_IMAGE + 'images/products/' + oneProduct.product.images} className="imageMainProd"/>
                            </div>
                            <div className="prodInfoAll">
                                <div className="descrProd">
                                    <p>{oneProduct.product.description}</p>
                                    <p><b>Бренд:</b> {oneProduct.product.brand}</p>
                                    <p><b>Сезон:</b> 2021</p>
                                    <p className="price">Цена: {
                                        Number(oneProduct.product.price_sale) > 0 ?
                                            <><span className="sale">{oneProduct.product.price} ₽</span> {oneProduct.product.price_sale} ₽ </> :
                                            <> {oneProduct.product.price} ₽ </>
                                    }</p>
                                </div>
                                <div className="tableInfo">
                                    <table>
                                        <tr className="mainTableInfo">
                                            <td colSpan="4">таблица размеров</td>
                                        </tr>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>Размер</td>
                                            <td>Цвет</td>
                                            <td>Наличие</td>
                                        </tr>
                                        {
                                            tables && tables.table_data.map((el, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{el.article_product}</td>
                                                        <td>{el.size_product}</td>
                                                        <td>{el.color_product}</td>
                                                        <td>{el.exists_product == 'true' ? 'да' : 'нет'}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </> : oneProduct && oneProduct.status == false ? <h1 className='titleText'>Продукт не обнаружен</h1> : <h1 className='titleText'>Загрузка...</h1>
            }



            <div class="infoVeloAll">
                <div class="buttonsInfo">
                    <button class="active">ОПИСАНИЕ</button>
                    <button>ИНСТРУКЦИЯ</button>
                    <button>ТЕХНОЛОГИИ</button>
                    <button>О БРЕНДЕ</button>
                </div>
                <div class="blockTextAll">
                    <p></p>
                </div>
            </div>


            <div class="sezonsProd">
                <h1 class="titleText">Похожие товары</h1>
                <div class="popularCards">
                    {
                        products && products.products.map((el, key) => {
                            if(key > 3) return ''
                            return(
                                <a href={`/products/${el.id}`} className="popularCard">
                                    <div className="saleCard">sezon</div>
                                    <h2>{el.title}</h2>
                                    <p><b>Бренд:</b> {el.brand}</p>
                                    <p className="price">{el.price} ₽</p>
                                    <img src={`${process.env.REACT_APP_API_IMAGE}images/products/${el.images}`} />
                                    <div className="exists">
                                        <i className="fas fa-check" />
                                    </div>
                                </a>
                            )
                        })
                    }

                </div>
            </div>

            <div class="newsSite">
                <h1 class="titleText">Новости</h1>
                <div class="newsCards">
                    {
                        news && news.news.map((el, key) => {
                            if(key > 2) return ''
                            return (
                                <div className="newCard">
                                    <div className="headNews">
                                        <h2>{el.title}</h2>
                                        <a href={`/news/${el.id}`}>перейти</a>
                                    </div>
                                    <div className="bodyNews">
                                        <p>
                                            <span
                                                className="text">{el.descr}</span> /
                                            <span className="time"> {el.created_at.substring(0, 10)}</span></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OneProduct;
