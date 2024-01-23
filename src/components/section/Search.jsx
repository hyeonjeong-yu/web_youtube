import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = props => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    // 검색 이동 함수 : keyword를 입력하고 enter를 치면 주소 변경
    const handleSearch = () => {
        console.log(searchKeyword);
        if (searchKeyword) {
            // 검색어가 비어있지 않은 경우에만 내비게이션 수행 및 검색어 초기화
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search'
                    name='searchInput'
                    id='searchInput'
                    autoComplete='off'
                    placeholder='검색어를 입력해주세요.'
                    className='search__input'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

Search.propTypes = {}

export default Search