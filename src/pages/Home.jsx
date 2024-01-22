import React from 'react';
import Main from '../components/section/Main';
import Today from '../components/contents/Today';
import Developer from '../components/contents/Developer';
import VideoSlider from '../components/videos/VideoSlider';

// 비디오 컴포넌트 공통요소 통합 작업
import { websiteText } from '../data/website';
import { portfolioText } from '../data/portfolio';
import { youtubeText } from '../data/youtube';

const Home = props => {
    return (
        // 속성값 전달하기
        <Main title='현정의 유튜브' description='유튜브에 오신 것을 환영합니다.'>

            {/* Home(main)에서 보여줄 contents 컴포넌트 출력  */}
            <Today />
            <Developer />
            <VideoSlider videos={websiteText} title='웹표준 사이트 만들기 기초 다지기' id='website' />
            <VideoSlider videos={portfolioText} title='webstoryboy의 포트폴리오 방법 공유 리스트입니다.' id='portfolio' />
            <VideoSlider videos={youtubeText} title='영상을 보고 코딩 공부하기' id='youtube' />

        </Main>
    )
}

Home.propTypes = {}

export default Home