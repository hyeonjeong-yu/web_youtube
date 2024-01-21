import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header';
import Footer from './Footer';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Main = (props) => {
    return (
            <HelmetProvider>
                <Helmet 
                    titleTemplate='%s | Webs Youtube' 
                    defaultTitle='현정의 Webs Youtube' 
                    defer={false}
                >
                    {/* 속성값 전달 받기 */}
                    {props.title && <title>{props.title}</title>}
                    <meta name='description' content={props.description}/>
                </Helmet>
                <Header />
                <main id='main' role='main'>
                    {/* Main의 자식들 뿌리기 */}
                    {props.children}
                </main>
                <Footer />
            </HelmetProvider>
    )
}

Main.propTypes = {}

export default Main