import React, { useState} from 'react' 
import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Link, 
    useParams, 
    Outlet, 
    NavLink,
    useNavigate
} from "react-router-dom"
// https://reactrouter.com/en/main
// npm i react-router-dom
 
import './07_gotoBack.css';

// useNavigate : App에서는 사용할 수 없고  컴포넌트에서만 사용 가능 
// a, Link, NavLink 사용하지 않고 button, span 등으로 버튼을 만들거나 
// a, Link, NavLink  사용하더라도  직접 이동하고 싶을 때 사용 



// warter fall 방식 : react-router 가 라우팅 처리를 위에서 아래로 순차적으로 처리함 
// notFound 처리는  제일 하단에 배치한다. 

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

        <Route  path="*" element={<NotFound />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default RoutesEx

const  NotFound = ()=>{
    return (
        <div className='page'>
            <h3> NotFound </h3>
        </div>
    )
}
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
    const navigate = useNavigate();
    // route에 대한 정보를 가지고 있다. 

    return (
        <div className='page'>
          <h2>Dashboard</h2>
          <button onClick={()=> navigate("/")}>뒤로가기</button>
        </div>
    )
} 
const Income = () => {
    const navigate = useNavigate();

    return (
        <div className='page'>
            Income 
            <button onClick={()=> navigate("/host")}>뒤로가기</button>
        </div>
    )
} 
const Reviews = () => {
    const navigate = useNavigate();

    return (
        <div  className='page'>Reviews 
                <button onClick={()=> navigate("/host")}>뒤로가기</button>
        </div>
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
      <div  className='page'>
        <h1>Hello, React Router!  NavLink</h1>

      </div>
    )
  }
  
  // localhost:3000/about
  function About() {
    return (
      <div  className='page'>
        <h1>About page goes here! 🎉</h1>
        <Link to=".."  className='gotoBack'>뒤로가기</Link>
      </div>
    )
  }
  
  // localhost:3000/coins
  const Coins = () => {
      return (
          <div  className='page'>
            <ul>
              <li><a href="/coins/1">coin 1</a></li>
              <li><a href="/coins/2">coin 2</a></li>
              <li><a href="/coins/3">coin 3</a></li>
              <li><a href="/coins/4">coin 4</a></li>
              <li><a href="/coins/kim">coin kim</a></li>
            </ul>
            <Link to=".."  className='gotoBack'>뒤로가기</Link>
          </div>
      )
  } 
   
  const CoinDetail = () => {
    const {id} = useParams();
    console.log( id ); 
    const navigate = useNavigate();

  
    return (
        <div  className='page'>
          <h3> params { id } </h3>
          CoinDetail

          <button onClick={ ()=>navigate("/coins")} > 뒤로가기 </button>
        </div>
    )
  }  
  