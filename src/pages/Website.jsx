import React from 'react'
import Main from '../components/section/Main';
import { portfolioText } from '../data/portfolio';
import { Link } from 'react-router-dom';

const Website = props => {
    return (
        <Main title='웹표준 사이트' description='웹표준 사이트 페이지입니다.'>
            <section id='portfolio'>
            <h2>webstoryboy의 포트폴리오 방법 공유 리스트입니다.</h2>
            <div className='video__inner'>
                {
                    portfolioText.map((video, key) => {
                        return (
                            <div className='video' key={key}>
                                <div className="video__thumb play__icon">
                                    <Link to={`/video/${video.videoId}`}>
                                        <img src={video.img} alt={video.title} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </section>
        </Main>
    )
}

Website.propTypes = {}

export default Website