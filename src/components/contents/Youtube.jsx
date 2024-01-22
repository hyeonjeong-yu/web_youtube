import React from 'react'
import PropTypes from 'prop-types'
import { youtubeText } from '../../data/youtube';
import { Link } from 'react-router-dom';

const Youtube = props => {
    return (
        <section id='youtube'>
            <h2>영상을 보고 코딩 공부하기</h2>
            <div className='video__inner'>
                {
                    youtubeText.map((video, key) => {
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

Youtube.propTypes = {}

export default Youtube