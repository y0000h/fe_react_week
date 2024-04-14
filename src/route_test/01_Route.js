import React from 'react' 
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom"
// https://reactrouter.com/en/main
// npm i react-router-dom
// localhost:3000/login
// localhost:3000/register
// localhost:3000/register/:id


// const Nav = ()=>{
//   const menus = ["home", "coins", "about"];
//   const menuStyle = {
//     display:"flex",
//     gap:"50px"
//   }

//   const linkStyle ={
//     textDecoration : "none",
//   }
//   return (
//     <nav style={ menuStyle}>
//        {
//         menus.map(menu=><Link to={`/${menu}`} style={linkStyle}>{menu}</Link>)
//                          // <a href={`/${menu}`}>{menu}</a>
//        }
//     </nav>
//   )
// }

import './nav_style.css';

const Nav = ()=>{
  const menus = ["home", "coins", "about"];
   
  return (
    <nav className='lnb'>
       {
        menus.map(menu=><Link to={`/${menu}`} key={menu}>{menu}</Link>)
                         // <a href={`/${menu}`}>{menu}</a>
                         //  key={menu} 각 메뉴를 구분하기 위한 키값을 메뉴로 지정 
       }
    </nav>
  )
}

// localhost:3000/home
// localhost:3000/about
// localhost:3000/coins
// localhost:3000/coins/:params
// 
const RoutesEx = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/coins" element={<Coins />} />
        {/* 코인 목록  */}
        <Route  path="/coins/:id" element={<CoinDetail />} />
        {/* 코인 목록 중 1개 선택 */}
        <Route  path="/about" element={<About />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default RoutesEx
 
const Header = ()=>{
  return <header> Header </header>
}

const Footer = ()=>{
  return <footer> Footer </footer>
}

// localhost:3000/home
function Home() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

// localhost:3000/about
function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}

// localhost:3000/coins
const Coins = () => {
    return (
        <ul>
          <li><a href="/coins/1">coin 1</a></li>
          <li><a href="/coins/2">coin 2</a></li>
          <li><a href="/coins/3">coin 3</a></li>
          <li><a href="/coins/4">coin 4</a></li>
          <li><a href="/coins/kim">coin kim</a></li>
        </ul>
    )
} 


// const CoinDetail = () => {
//     const params = useParams();
//     console.log( params );
//     // { params : 3 }

//     return (
//         <div>
//           <h3> params { params.id } </h3>
//           CoinDetail
//         </div>
//     )
// } 

const CoinDetail = () => {
  const {id} = useParams();
  console.log( id ); 

  return (
      <div>
        <h3> params { id } </h3>
        CoinDetail
      </div>
  )
} 
///

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