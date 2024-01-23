// channelID 값을 가져오면 해당 채널을 보여줌

import React, { useState, useEffect } from 'react'
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = props => {

    const { channelID } = useParams();
    const [ channelDetail, setVideoDetail ] = useState();

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setVideoDetail(result.items[0]);
        })
        .catch(error => console.log(error));

    }, [channelID])

    return (
        <Main title='유튜브 채널' description='유튜브 채널 페이지입니다.'>
            {
                channelDetail && (
                    <section id='channel'>
                        <div className='channel__header'>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                    </section>
            )}
        </Main>
    )
}

Channel.propTypes = {}

export default Channel