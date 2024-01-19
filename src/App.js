import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Today from './pages/Today';
import Developer from './pages/Developer';
import Website from './pages/Website';
import Youtube from './pages/Youtube';
import Channel from './pages/Channel';
import Video from './pages/Video';
import Search from './pages/Search';
import Not from './pages/Not';

const App = () => {
  return (
    
    // 해당 Components를 불러올 수 있는 Page setting
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/today' element={ <Today/> } />
            <Route path='/developer' element={ <Developer/> } />
            <Route path='/website' element={ <Website/> } />
            <Route path='/youtube' element={ <Youtube/> } />
            <Route path='/channel/:channelID' element={ <Channel/> } />
            <Route path='/video/:videoID' element={ <Video/> } />
            <Route path='/search/:searchID' element={ <Search/> } />
            <Route path='/*' element={ <Not/> } />
            {/* 그 외 라우터 접속시 에러 페이지 출력 */}
        </Routes>
    </BrowserRouter>
  )
}

export default App