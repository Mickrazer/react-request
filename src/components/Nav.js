import React from 'react';
import logo from '../images/Logo.svg';

function Nav(props) {
    const {activeButton, handleActiveBtn} = props;

    return (
        <nav className="nav">
            <div className="nav__header">
                <img src={logo} alt="avatar" className="nav__logo"/>
                <h1 className="nav__title">Тестовое
                    <span className="nav__title-color"> задание</span>
                </h1>
            </div>
            <div className="nav__buttons">
                <button className={activeButton ? "button active" : "button"} onClick={handleActiveBtn}
                        disabled={activeButton}>
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path className={activeButton ? "svg__active" : ''}
                              d="M9.29775 0.281949L0.15319 9.14045C-0.169697 9.45324 0.0517653 10 0.501344 10H3V18C3 19.1046 3.89543 20 5 20H7C7.55228 20 8 19.5523 8 19V15C8 14.4477 8.44771 14 9 14H11C11.5523 14 12 14.4477 12 15V19C12 19.5523 12.4477 20 13 20H15C16.1046 20 17 19.1046 17 18V10H19.4987C19.9484 10 20.1698 9.45291 19.8466 9.14023L10.6899 0.281499C10.3018 -0.0940076 9.68565 -0.0938083 9.29775 0.281949Z"
                              fill="#4B4C4F"/>
                    </svg>
                    Главная
                </button>
                <button className={!activeButton ? "button active" : "button"} onClick={handleActiveBtn}
                        disabled={!activeButton}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={!activeButton ? "svg__active" : ''}
                              d="M0 1.99982C0 0.895253 0.895431 -0.00017643 2 -0.00017643H8.76392C9.52147 -0.00017643 10.214 0.427835 10.5528 1.10541L11.4472 2.89432C11.786 3.5719 12.4785 3.99991 13.2361 3.99991H18C19.1046 3.99991 20 4.89534 20 5.99991V13.9999C20 15.1045 19.1046 15.9999 18 15.9999H2C0.895431 15.9999 0 15.1045 0 13.9999V1.99982Z"
                              fill="#4B4C4F"/>
                    </svg>
                    Архив заявок
                </button>
            </div>
            <button className="button">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H9C10.1046 20 11 19.1046 11 18V11H14V14.5005C14 14.9333 14.5126 15.1617 14.8344 14.8722L19.8368 10.3717C20.0576 10.173 20.0575 9.82683 19.8367 9.62821L14.8344 5.12922C14.5126 4.8398 14 5.06818 14 5.50098V9H11V2C11 0.895431 10.1046 0 9 0H2ZM11 9H5.5C5.22386 9 5 9.22386 5 9.5V10.5C5 10.7761 5.22386 11 5.5 11H11V9Z"
                        fill="#4B4C4F"/>
                </svg>
                Выйти
            </button>
            <p className="nav__version">Версия 1.0.1</p>
        </nav>
    );
}

export default Nav;
