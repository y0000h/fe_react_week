import React, { useState} from 'react' 
import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Link, 
    useParams, 
    Outlet, 
    NavLink 
} from "react-router-dom"
// https://reactrouter.com/en/main
// npm i react-router-dom


/// NavLink : 정확히 active로 명명된 클래스만 스스로 처리하는 컴포넌트
// style로 디자인 할때 
import './05_nav_style.css';

// 모든 컴포넌트에서 스타일을 공유하기 위해서 
// 스타일 변수를 컴포넌트 외부에 선언 

const stylePower = {
    color:"red",
    background :"green"
}

const Nav = ()=>{
  const menus = ["home", "coins", "host", "about"];
  
  return (
    <nav className='lnb'>
       {
        menus.map(menu=>
            <NavLink to={`/${menu}`} key={menu}  
                    style={({isActive})=> isActive ? stylePower : null}
            >{menu}</NavLink>
        ) 
       }
    </nav>
  )
}
  
const RoutesEx = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/coins" element={<Coins />} /> 
        <Route  path="/coins/:id" element={<CoinDetail />} /> 

        <Route path="/host" element={<HostLayout />} > 
            <Route  index  element={<Dashboard />} /> 
            <Route  path="income" element={<Income />} /> 
            <Route  path="reviews" element={<Reviews />} /> 
            {/*  / 있으면 절대주소 localhost:3000/reviews */}
            {/*  / 없으면 상대주소 localhost:3000/host/reviews */}
        </Route>

        <Route  path="/about" element={<About />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default RoutesEx

// host 대표로 사용하는 메뉴 컴포넌트 
// Oulet 컴포넌트 : children 속성과 같은 역활
const HostLayout = ()=>{
    return (
         <>
            <nav className='host'>
                <NavLink to="/host"  end
                    style={({isActive})=> isActive ? stylePower : null}
                >dashboard</NavLink>
                <NavLink to="/host/income"
                    style={({isActive})=> isActive ? stylePower : null}
                >income</NavLink>
                <NavLink to="/host/reviews"
                    style={({isActive})=> isActive ? stylePower : null}
                >reviews</NavLink>
            </nav>
            <Outlet />
         </>
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

 
const Header = ()=>{
    return <header> Header </header>
  }
  
  const Footer = ()=>{
    return <footer> Footer </footer>
  }
  
  // localhost:3000/home
  function Home() {
    return (
      <h1>Hello, React Router!  NavLink</h1>
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
  