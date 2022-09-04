import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const News = (props) => {

    let api = process.env.REACT_APP_API + 'news'
    const [newsState, setNewsState] = useState()

    const fetchData = async () => {
        let result = await fetch(api, {
            method: 'GET'
        })
        let parsing = result.json()
        parsing.then(res => setNewsState(res)).catch(err => setNewsState(err))
    }

    useEffect(() => {
        fetchData().then(r => {})
    }, [])

    return (
        <div>
            <h1 className="titleText">Все новости</h1>
            <div className="popularCards">
                {
                    newsState && newsState.news.map((elem, key) => {
                        return (
                            <Link to={'/news/' + elem.id} className="popularCard" key={key}>
                                <h2>{elem.title}</h2>
                                <p><b>Автор:</b> {elem.author}</p>
                                <img src={process.env.REACT_APP_API_IMAGE + 'images/news/' + elem.image} alt={"cardImage"}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default News;
