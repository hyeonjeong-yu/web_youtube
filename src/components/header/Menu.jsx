import React, { useState } from 'react'
import { headerMenus } from '../../data/header.js';
import { Link, useLocation } from 'react-router-dom';

const Menu = props => {
    let [menu, setMenu] = useState(headerMenus);
    let location = useLocation();
    // console.log(location);

    return (
    <nav className='header__menu'>
        <ul className='menu'>
            {
                menu.map((param, i) => {
                    return (
                        <li key={i} className={location.pathname === menu[i].src ? 'active' : ''}>
                            {/* 현재 location과 해당 메뉴의 src가 같다면 active 클래스 추가 */}
                            <Link to={menu[i].src}>
                                {menu[i].icon} {menu[i].title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
    )
}

Menu.propTypes = {}

export default Menu