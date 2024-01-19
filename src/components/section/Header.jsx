import React from 'react'
import PropTypes from 'prop-types'

import { CiPlane } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const Header = props => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
            <a href='/'>
                <em arua-hidden='true'></em>
                <span>webs<br />youtube</span>
            </a>
        </h1>
        <nav className='header__menu'>
            <ul className='menu'>
                <li className='active'>
                    <a href='/'><CiPlane />현정</a>
                </li>
                <li>
                    <a href='/today'>추천영상</a>
                </li>
                <li>
                    <a href='/developer'>추천 개발자</a>
                </li>
                <li>
                    <a href='/website'>웹표준 사이트</a>
                </li>
                <li>
                    <a href='/port'>포트폴리오 사이트</a>
                </li>
                <li>
                    <a href='/youtube'>유튜브 클론</a>
                </li>
            </ul>
        </nav>
        <div className='header__sns'>
            <ul>
                <li>
                    <a href='https://github.com/' rel='noopener noreferrer'>
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/' rel='noopener noreferrer'>
                        <AiFillYoutube />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/' rel='noopener noreferrer'>
                        <AiOutlineInstagram />
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

Header.propTypes = {}

export default Header