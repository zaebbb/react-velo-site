import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

const OneNews = () => {

    let {id} = useParams()

    const [dataNew, setDataNew] = useState()
    const [user, setUser] = useState()
    const [moreNews, setMoreNews] = useState()
    const [editMod, setEditMod] = useState(false)

    // error state
    const [titleError, setTitleError] = useState()
    const [descrError, setDescrError] = useState()
    const [imgError, setImgError] = useState()

    const fetchData = async () => {
        let result = await fetch(process.env.REACT_APP_API + 'news/' + id, {
            method: 'GET'
        })
        let parsing = result.json()
        parsing.then(res => setDataNew(res)).catch(err => setDataNew(err))

        let resultUser = await fetch(process.env.REACT_APP_API + 'users/' + localStorage.getItem('authorization').substring(60), {
            method: 'GET',
            headers: {
                'authorization': localStorage.getItem('authorization')
            }
        })
        parsing = resultUser.json()
        parsing.then(res => setUser(res)).catch(err => setUser(err))

        let resultMoreNews = await fetch(process.env.REACT_APP_API + 'news', {
            method: 'GET',
        })
        parsing = resultMoreNews.json()
        parsing.then(res => setMoreNews(res)).catch(err => setMoreNews(err))
    }

    useEffect(() => {
        fetchData().then(r => {})
    }, [])

    // functions
    async function deleteNew() {
        let result = await fetch(process.env.REACT_APP_API + 'news/' + id + '/del', {
            method: 'POST',
            headers: {
                'authorization': localStorage.getItem('authorization')
            }
        })

        if (result.status == 200) {
            document.querySelector('.newPostContent').style.display = 'none'
            document.querySelector('.titleText').textContent = 'Успешно удалено, страница перезагрузится автоматически'
            setTimeout(() => {
                document.location.href = '/news'
            }, 1000)
        } else {
            document.querySelector('.newPostContent').style.display = 'none'
            document.querySelector('.titleText').textContent = 'Ошибка при удалении, страница перезагрузится автоматически'
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
    }


    //update
    const updateNew = async e => {
        e.preventDefault()

        if (e.target.title.value.trim() === '') setTitleError('Поле "Title" обязательно к заполнению')
        if (e.target.descr.value.trim() === '') setDescrError('Поле "Description" обязательно к заполнению')
        if(e.target.filesImg.files.length == 0) setImgError('Поле "Image" обязательно к заполнению')
        if(
            e.target.title.value.trim() !== '' &&
            e.target.descr.value.trim() !== '' &&
            e.target.filesImg.files.length !== 0
        ){
            if(
                 e.target.filesImg.files[0].name.includes('.png') ||
                e.target.filesImg.files[0].name.includes('.jpg')
            ){
                if(e.target.filesImg.files[0].size < 1024 * 1024 * 2){
                    setImgError('')

                    let datas = new FormData(document.querySelector('.upNew'))
                    datas.append('title',e.target.title.value)
                    datas.append('descr',e.target.descr.value)
                    datas.append('image',e.target.filesImg.files[0])

                    let result = await fetch(process.env.REACT_APP_API + 'news/' + id + '/up', {
                        method: 'POST',
                        headers: {
                            'authorization': localStorage.getItem('authorization')
                        },
                        body: datas
                    })
                    if(result.status == 200){
                        document.querySelector('.newPostContent').style.display = 'none'
                        document.querySelector('.titleText').textContent = 'Пост успешно обновлен, страница перезагрузится автоматически'
                        setTimeout(() => {
                            document.location.reload()
                        }, 1000)
                    } else {
                        document.querySelector('.newPostContent').style.display = 'none'
                        document.querySelector('.titleText').textContent = 'При обновлении произошла непредвиденная ошибка, страница перезагрузится автоматически'
                        setTimeout(() => {
                            document.location.reload()
                        }, 1000)
                    }
                } else {
                    setImgError('Изображение не должно превышать более 2 МБ')
                }
            } else {
                setImgError('Для загрузки допустимо только изображение')
            }
        }
    }

    // validation
    function validateTitle(e) {
        return e.target.value.trim() === '' ? setTitleError('Поле "Title" обязательно к заполнению') : setTitleError('')
    }

    function validateDescr(e) {
        return e.target.value.trim() === '' ? setDescrError('Поле "Description" обязательно к заполнению') : setDescrError('')
    }

    return (
        <div>
            {
                dataNew && dataNew.new ?
                    <>
                        <h1 className="titleText">{dataNew.new.title}</h1>
                        <div className="newPostContent">
                            <div className="newPostImage">
                                <img src={process.env.REACT_APP_API_IMAGE + 'images/news/' + dataNew.new.image}/>
                            </div>
                            <div className="newPostText">
                                <p><b>Автор: </b> {dataNew.new.author}</p>
                                <p><b>Опубликовано: </b> {dataNew.new.created_at.substring(0, 10)}</p>
                                <p>{dataNew.new.descr}</p>
                            </div>
                        </div>
                        {
                            user && user.message.name === 'admin' ?
                                <>
                                    <div className="headNews editNew">
                                        <button onClick={() => {
                                            setEditMod(!editMod)
                                        }}>ОБНОВИТЬ
                                        </button>
                                        <button onClick={deleteNew}>УДАЛИТЬ</button>
                                    </div>
                                </> : ''
                        }
                    </> : dataNew && dataNew.status === false ? <h1 className='titleText'>Пост не найден</h1> :
                    <h1 className='titleText'>Загрузка</h1>
            }
            {
                editMod ? <>
                    {
                        dataNew && dataNew.new ?
                            <>
                                <form onSubmit={updateNew} className="updateForm upNew">
                                    <input
                                           type="text"
                                           name="title"
                                           defaultValue={dataNew.new.title}
                                           onInput={validateTitle}/>
                                    <div className="error errorTitle">{titleError}</div>
                                    <input
                                            type="text"
                                            name="descr"
                                           defaultValue={dataNew.new.descr}
                                           onInput={validateDescr}/>
                                    <div className="error errorDescr">{descrError}</div>
                                    <input type="file" name="filesImg"/>
                                    <div className="error errorImg">{imgError}</div>
                                    <input type="submit"/>
                                </form>
                            </> : ''
                    }
                </> : ''
            }

            <div className="newsSite">
                <h1 className="titleText">Новости</h1>
                <div className="newsCards">

                    {
                        moreNews && moreNews.news.map((elem, key) => {
                            if (key < 3) {
                                return (
                                    <div className="newCard" key={key}>
                                        <div className="headNews">
                                            <h2>{elem.title}</h2>
                                            <a href={'/news/' + elem.id}>перейти</a>
                                        </div>
                                        <div className="bodyNews">
                                            <p>
                                                <span className="text">{elem.descr.substring(0, 40)}</span> /
                                                <span className="time"> {elem.created_at.substring(0, 10)}</span></p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OneNews;
