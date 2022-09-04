import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="widthContent">
                <div className="footerHead">
                    <div className="blockFooter">
                        <h3>навигация</h3>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                        <a href="/">Home</a>
                        <a href="/">Catalog</a>
                    </div>
                    <div className="blockFooter">
                        <h3>сервис и помощь</h3>
                        <a href="/">Как заказать товар</a>
                        <a href="/">Условия доставки</a>
                        <a href="/">Возврат и обмен</a>
                        <a href="/">Оплата</a>
                        <a href="/">Таблицы размеров</a>
                        <a href="/">Инструкции к товарам</a>
                        <a href="/">Условия гарантии</a>
                    </div>
                    <div className="blockFooter">
                        <h3>информация</h3>
                        <a href="/">Адреса и телефоны магазинов</a>
                        <a href="/">Адреса сервисных центов</a>
                        <a href="/">Вакансии</a>
                        <a href="/">Команда</a>
                        <a href="/">Ссылки</a>
                        <a href="/">Обратная связь</a>
                    </div>
                </div>
                <div className="footerBody">
                    <p className="copyright">©2021 «VELOZAEB». Все права защищены.</p>
                    <div className="scrollTop" onClick={() => window.scrollTo(0,0)}>
                        <i className="fas fa-angle-up" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
