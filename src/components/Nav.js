import React from 'react'

// react-router : routing
// https://reactrouter.com/en/main
// 
// localhost:3000/home
// localhost:3000/movie
// localhost:3000/coin
// localhost:3000/about
// localhost:3000/contact

import { NavLink } from 'react-router-dom';
import './Nav.css'
import { useAuth } from '../contexts/auth';
import DarkModeBtn from './DarkModeBtn' 
const Nav = () => {
  const { user,  logout }= useAuth()
  return (
    <nav className='lnb'>
      <ul>
        <li><NavLink to="/home">home</NavLink></li> 
        <li><NavLink to="/makeup">Makeup</NavLink></li> 
        <li><NavLink to="/board">게시판</NavLink></li> 
        <li><NavLink to="/movie">movie</NavLink></li>
        <li><NavLink to="/coin">coin</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </ul>
      {
        !user ? 
        <NavLink  to="/login">로그인</NavLink> : 
        <button onClick={ logout }>로그아웃</button>
      }
      <DarkModeBtn />
    </nav>
  )
}

export default Nav
