import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header';
import Footer from './Footer';

const Main = (props) => {
    return (
        <>
            <Header />
            <main id='main' role='main'>
                {props.children}
                {/* Main의 자식들 뿌리기 */}
            </main>
            <Footer />
        </>
    )
}

Main.propTypes = {}

export default Main