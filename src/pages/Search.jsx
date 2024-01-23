// 검색 결과를 표시하는 페이지로, YouTube API를 사용하여 검색 결과를 가져와 표시

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'

const Search = () => {
    const { searchID } = useParams();
    // 현재 경로에서 searchId 파라미터(사용자가 입력한 검색어)를 가져온다.

    const [ videos, setVideos ] = useState([]);
    // 검색 결과로 나온 비디오 목록을 빈 배열로 설정된 videos 상태 변수에 저장
    
    useEffect(() => {
        // 컴포넌트가 마운트되거나 searchId가 변경될 때마다 api 호출하여 검색 결과 가져온다.
        // console.log(searchID);

        // ver.1 (YOUTUBE)
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
            // q: 검색하고 싶은 단어
        )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setVideos(result.items)
        })
        .catch(error => console.log(error));


        // ver.2 (RAPID)
        // fetchFromAPI(`search?part=snippet&q=${searchID}`)
            // .then((data) => setVideos(data.items))
    }, [searchID])

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search