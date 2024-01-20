import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Website from './pages/Website'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Home'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
  return (
    
      <BrowserRouter>
        <Header />
        <Main>
            <Routes>
            {/* 해당 Components를 불러올 수 있는 페이지 구성 */}
                <Route path='/' element={<Home/>}/>
                <Route path='/today' element={<Today/>}/>
                <Route path='/developer' element={<Developer/>}/>
                <Route path='/website' element={<Website/>}/>
                <Route path='/port' element={<Port/>}/>
                <Route path='/youtube' element={<Youtube/>}/>
                <Route path='/channel/:channelID' element={<Channel/>}/>
                <Route path='/video/:videoID' element={<Video/>}/>
                <Route path='/search/:searchID' element={<Search/>}/>
                <Route path='*' element={<Not/>}/>
            </Routes>
        </Main>
        <Footer />
    </BrowserRouter>
  )
}

export default App