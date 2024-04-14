import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Coin.css';
import ScrollIndecator from '../components/scroll-indecator';
import { useThemeContext } from '../contexts/theme';
import Pagination from '../components/pagination';
// pagination 추가 해야 함 
 

const Coin = ({coins, isLoading}) => {
  const navigate = useNavigate();
  const [ search, setSearch ] = useState("");
  const [ searchCoin, setSearchCoin ] = useState("");


  const changeHandle  = (event)=>{
    const id = event.target.value; 

    const find = coins.find( coin => coin.id === id );
    navigate(`/coin/${find.id}`)
  }

  const setSearchHandle = (e)=>{
      if( e.target.value === ""){
        setSearch("");
        // 
      }
  }
  const searchHandle = ()=>{
     if( search !== ""){
        const find =  coins.find( coin => coin.id.includes(search.toLocaleLowerCase()));
        // 대소문자 구분 없이 찾도록 만듬 
        setSearchCoin( find );
     } 
  }

  useEffect(()=>{
    searchHandle();
    // console.log( searchCoin )
  }, [search])

  const { isDark } = useThemeContext();

  // pagination 컴포넌트에서 전체 개수가 필요, coins.length
  // 현재 보고 있는 페이지 번호 
  const [ currentPage, setCurrentPage] = useState(4);
  // 한페이지당 보여질 목록의 개수
  const [ postPerPage, setPostPerPage] = useState(20);
  // 현재페이지에 보여질 목록의 끝 번호
  const lastPost = postPerPage * currentPage;  
  // 현재페이지에 보여질 목록의 시작 번호
  const startPost = lastPost - postPerPage; 

  const currentCoins = coins.slice( startPost, lastPost );

  return (
    <section className='coin-container'
          style={{ 
            background : isDark ?   "transparent" : "black",
            color : isDark ?  "black" : "white" 
        }}
    >
      <div>
      <ScrollIndecator />

       
      

      <h2> 코인 총{coins.length} 종목 </h2>

      <label htmlFor='coin_select'> 코인 종목을 선택하면 자세히 확인할 수 있습니다.</label>
      <select onChange={(event)=>changeHandle(event)}
        id="coin_select"
      >
        <option> 종목을 선택하세요. </option>
        {
          coins.length && coins.map( coin=>
          <option key={coin.id}> {coin.id} </option>
          )
        }
      </select>
      
      <div>
        <input type="text" 
               onChange={ setSearchHandle }
               placeholder='코인 이름을 검색하세요.'
        />
      </div>
      {
          !searchCoin ? null : 
          <div style={{ height: '50px'}}>
            { searchCoin.id}
            { searchCoin.name}
            { searchCoin.symbol}
          </div>  
      }
      {
         isLoading ? 
         "Loading..." : 
         currentCoins.map( (coin, index)=> 
                <div key={coin.id}> {coin.myId} {coin.id}</div>
         )
      }

      </div>

      <Pagination postPerPage={postPerPage} 
               totalPosts={coins.length} 
               currentPage={currentPage}   
               setCurrentPage={setCurrentPage}
      />

      
    </section>
  )
}

// 과제 
// makeup : search API 만들어보세요. 
// 1. front : 검색어를 입력하면 => backend 넘겨주고 
// 2. backend : 검색어에 해당하는 데이터를 찾아서 => front 넘겨주고 
// 3. front 에서 화면에 출력하기
// chart 만들기
// 배포
export default Coin
