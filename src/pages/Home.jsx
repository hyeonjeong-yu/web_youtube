import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Website from '../components/contents/Website'
import Port from '../components/contents/Port'
import Youtube from '../components/contents/Youtube'

const Home = props => {
    return (
        // 속성값 전달하기
        <Main title='현정의 유튜브' description='유튜브에 오신 것을 환영합니다.'>

            {/* Home(main)에서 보여줄 contents 컴포넌트 출력  */}
            <Today />
            <Developer />
            <Website />
            <Port />
            <Youtube />
            
        </Main>
    )
}

Home.propTypes = {}

export default Home