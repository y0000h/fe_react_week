import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Coin.css';
// pagination 추가 해야 함 


const Coin = ({coins}) => {
  const navigate = useNavigate();
  const [ search, setSearch ] = useState("");
  const [ searchCoin, setSearchCoin ] = useState("");

  const changeHandle  = (event)=>{
    const id = event.target.value; 

    const find = coins.find( coin => coin.id === id );
    navigate(`/coin/${find.id}`)
  }

  const searchHandle = ()=>{
     const find =  coins.find( coin => coin.id.includes(search.toLocaleLowerCase()));
     // 대소문자 구분 없이 찾도록 만듬 
     setSearchCoin( find );
  }

  useEffect(()=>{
    searchHandle();
    // console.log( searchCoin )
  }, [search])

  return (
    <section className='coin-container'>
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
               onChange={ (e)=>setSearch(e.target.value)}
               placeholder='코인 이름을 검색하세요.'
        />
      </div>
      {
        searchCoin && <div className='search_coin'>
                          <h3>{ searchCoin.name}</h3>
                          <p> 거래량 순위{ searchCoin.rank }</p>
                          <p> 최종거래일 { searchCoin.last_updated} </p>
                          <p> 가격 { searchCoin.quotes.USD.price} </p>
                          <p> 일일 거래량 { searchCoin.quotes.USD.percent_change_24h} </p>
                      </div>
      }
    </section>
  )
}

// fetch 계속 사용됨
// 하루에 사용할 수 있는 량의 문제 
// node : 요청량 제한이 없을 듯 
export default Coin
