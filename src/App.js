import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

// import Home from './pages/Home'
// import Today from './pages/Today'
// import Developer from './pages/Developer'
// import Website from './pages/Website'
// import Port from './pages/Port'
// import Youtube from './pages/Youtube'
// import Channel from './pages/Channel'
// import Video from './pages/Home'
// import Search from './pages/Search'
// import Not from './pages/Not'

// lazy 함수 : 비동기적으로 컴포넌트를 로드, 컴포넌트가 필요할 때 비동기적으로 불러와서 번들 크기를 줄임
const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Website = lazy(() => import('./pages/Website'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));


const App = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<Main />}>
        {/* React.Suspense : 비동기적으로 data, components를 불러오는 과정에서 대기 상태를 처리하기 위한 Component
        로딩되기를 기다릴 수 있으며, 로딩 중에는 대체 콘텐츠(로딩 스피너 등)를 표시할 수 있음 */}
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
        </Suspense>

        {/* Header, Footer 둘다 Main에서 불러오도록 변경 (2024.01.21) */}
    </BrowserRouter>
  )
}

export default App