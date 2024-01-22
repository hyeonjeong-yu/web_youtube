import React from 'react'
import { websiteText } from '../../data/website';
import { Link } from 'react-router-dom';

const Website = props => {
    return (
        <section id='website'>
            <h2>웹표준 사이트입니다</h2>
            <div className='video__inner'>
                {
                    websiteText.map((video, key) => {
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

Website.propTypes = {}

export default Website