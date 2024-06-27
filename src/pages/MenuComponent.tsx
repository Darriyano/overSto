import {useState} from "react";
import "../styles/menu.css";
import {Link} from "react-router-dom";

const MenuComponent = () => {
    const [isOpen, setter] = useState(false);

    const toggleMenu = () => {
        setter(!isOpen);
    }

    return (
        <div className="head">
            <button className='menu-btn' onClick={toggleMenu}>
                <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.33333 28H39.6667C40.95 28 42 26.95 42 25.6667C42 24.3833 40.95 23.3333 39.6667 23.3333H2.33333C1.05 23.3333 0 24.3833 0 25.6667C0 26.95 1.05 28 2.33333 28ZM2.33333 16.3333H39.6667C40.95 16.3333 42 15.2833 42 14C42 12.7167 40.95 11.6667 39.6667 11.6667H2.33333C1.05 11.6667 0 12.7167 0 14C0 15.2833 1.05 16.3333 2.33333 16.3333ZM0 2.33333C0 3.61667 1.05 4.66667 2.33333 4.66667H39.6667C40.95 4.66667 42 3.61667 42 2.33333C42 1.05 40.95 0 39.6667 0H2.33333C1.05 0 0 1.05 0 2.33333Z"
                        fill="#666666"/>
                </svg>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className='h1'>Меню</div>

                    <div className="marg"><Link to="/card">Карта робота</Link></div>
                    <nav></nav>
                    <div className="marg"><Link to="/diagnosis">Диагностика</Link></div>
                    <nav></nav>
                    <div className="marg"><Link to="/logs">Логи и ошибки</Link></div>
                    <nav></nav>
                    <div className="marg"><Link to="/robo-setting">Настройки робота</Link></div>
                    <nav></nav>
                    <div className="marg"><Link to="/app-settings">Настройки приложения</Link></div>
                </div>
            )}
        </div>
    )
}
export default MenuComponent;