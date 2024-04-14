import React, { useContext } from 'react'
import { useThemeContext } from '../contexts/theme'
import { useAuth } from '../contexts/auth';
import './section.css'

const Section = () => {
 const { isDark } =  useThemeContext();
 const { user } = useAuth();

  return (
    <section style={{
        background : isDark ? "beige" : "black" , 
        color : isDark ? "black" : "white"}}
    >
      {/* { props.children } */}
      {/* { children } */}
      <p>section {user} </p>
    </section>
  )
}

export default Section
