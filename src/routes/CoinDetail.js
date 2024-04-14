import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BarChartComp from '../components/charts/BarChartComp';
import LineChartComp from '../components/charts/LineChartComp';


const CoinDetail = ({coins}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    let findCoin ;
    let [barData, setBarData] = useState([])
    let [lineData, setLineData] = useState([])

    useEffect(()=>{
      findCoin = coins.find( coin=> coin.id === id );
      setBarData(
      [
        {
          name:'24h',
          value: findCoin?.quotes.USD.market_cap_change_24h
        },
        {
          name:'ath',
          value: findCoin?.quotes.USD.percent_from_price_ath
        },
      ])
      setLineData(
      [
        {
          name:'1h',
          value: findCoin?.quotes.USD.percent_change_1h
        },
        {
          name:'6h',
          value: findCoin?.quotes.USD.percent_change_6h
        },
        {
          name:'7d',
          value: findCoin?.quotes.USD.percent_change_7d
        },
        {
          name:'15m',
          value: findCoin?.quotes.USD.percent_change_15m
        },
        {
          name:'30d',
          value: findCoin?.quotes.USD.percent_change_30d
        },
        {
          name:'30m',
          value: findCoin?.quotes.USD.percent_change_30m
        },
      ])
      
    }, [])
  return (
    <div  className='paddingTop'>
      CoinDetail { id }
      { findCoin?.id }

      <BarChartComp barData={barData} />
      <LineChartComp lineData={lineData} />

      <button onClick={ ()=>navigate('/coin')}>뒤로가기</button>
      {/* 상대주소 라우트를 사용하지 않으므로 절대주소 사용  */}
    </div>
  )
}

export default CoinDetail
