import React from 'react' 
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"

const Nav = ()=>{
  return (
    <nav>
       {/* 메뉴 구현하기 */}
    </nav>
  )
}

const RoutesEx = () => {
  return (
    <div>
       {/* 라우트 구현하기  */}
    </div>
  )
}

export default RoutesEx
 

function Home() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}

const Coins = () => {
    return (
        <div>Coins</div>
    )
} 

const CoinDetail = () => {
    const params = useParams();
    console.log( params )

    return (
        <div>CoinDetail</div>
    )
} 

const Dashboard = () => {
    return (
        <div>Dashboard</div>
    )
} 
const Income = () => {
    return (
        <div>Income</div>
    )
} 
const Reviews = () => {
    return (
        <div>Reviews</div>
    )
} 