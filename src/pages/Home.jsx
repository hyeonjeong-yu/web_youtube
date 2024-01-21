import React from 'react'
import Main from '../components/section/Main'

const Home = props => {
    return (
        <Main title='현정의 유튜브' description='유튜브에 오신 것을 환영합니다.'>
        {/* 속성값 전달하기 */}
            Home
        </Main>
    )
}

Home.propTypes = {}

export default Home