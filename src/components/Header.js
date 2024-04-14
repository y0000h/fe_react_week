import React from 'react'

import { useThemeContext } from '../contexts/theme'
import { useAuth } from '../contexts/auth'; 
import Nav from './Nav';
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
 const { isDark } = useThemeContext();
 const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <header style={{
         background : isDark ? "white" : "black" , 
         color : isDark ? "black" : "white"}}
         className='header'
    >
      <div id="header">
        <h1 onClick={()=>navigate("/")}
            style={{ cursor : "pointer"}}
        >브랜드네임 { user }</h1>
        {/* 
          Link, a로 만들어도 되고,
          링크 이외의 요소에서도 라우팅 걸수 있다. 
        */}
        <Nav />
      </div>
    </header>
  )
}

export default Header
