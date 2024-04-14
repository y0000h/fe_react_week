import React from 'react'
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { useThemeContext } from '../contexts/theme';


const DarkModeBtn = () => {
    const { isDark, setIsDark } =  useThemeContext();
    
    const darkBtn = {
        width: "30px", 
        diplay:"flex",
        justifyContent : "center",
        alignItems:"center",
        padding: "5px",
        border: "1px solid black",
        borderRadius : "10px",
        background : isDark?  "white" : "gray" 
    }

  return (
    <div onClick={()=>setIsDark(!isDark)}
         className='dark_btn'
         style={ darkBtn }
    >
      {
        isDark ? <FaMoon color={"gray"} /> : <FaSun color={"white"}/>
      }
    </div>
  )
}

export default DarkModeBtn
