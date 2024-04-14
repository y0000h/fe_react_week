import React, { useState } from 'react'
import { useAuth } from '../contexts/auth'
import './Login.css'

const Login = () => {
  const [name, setName] = useState("");
  const { user, login } = useAuth();
  // user="kim"

  const userHandle = (event)=>{
     if( user  ){
        alert('이름을 입력하세요.')
     }else if( name === "kim"){
        login(name);
        setName("")
     }
      
  }

  return (
    <div className='login_popup'>
      <label htmlFor='user_name'>이름을 입력하세요.</label>
      <input type='text' id="user_name" onChange={ (e)=>{ setName(e.target.value)} }  value={name} />
      <input type='button' id="loginBtn" value="로그인"  onClick={ userHandle } />
    </div>
  )
}

export default Login

 