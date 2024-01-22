import React from 'react'
import { portfolioText } from '../../data/portfolio';
import { Link } from 'react-router-dom';

const Portfolio = props => {
    return (
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
    )
}

Portfolio.propTypes = {}

export default Portfolio