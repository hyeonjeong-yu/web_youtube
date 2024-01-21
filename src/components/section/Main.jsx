import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Header from './Header';
import Footer from './Footer';
import Search from './Search';
/*
    SEO : 검색 엔진 최적화
    리액트는 싱글 페이지로 구성되어 있기 때문에 페이지 별 설명이나 타이틀 작업 필요
    react-helmet-async 라이브러리로 작업

    Helmet : 주로 title, meta, link, script 등의 태그를 동적을 조작 하는 데에 사용
*/


const Main = (props) => {
    return (
            <HelmetProvider>
                <Helmet 
                    titleTemplate='%s | Webs Youtube'
                    // %s : 실제 타이틀로 대체
                    defaultTitle='현정의 Webs Youtube' 
                    defer={false}
                >
                    {/* 속성값 전달 받기 */}
                    {props.title && <title>{props.title}</title>}
                    <meta name='description' content={props.description}/>
                </Helmet>

                <Header />
                <main id='main' role='main'>
                    <Search />

                    {/* props를 이용하며 메뉴 클릭할 때마다 해당 콘텐츠 보이도록 하기*/}
                    {props.children}
                </main>
                <Footer />
            </HelmetProvider>
    )
}

Main.propTypes = {}

export default Main