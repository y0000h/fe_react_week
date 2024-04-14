import { useRef, useEffect, useState } from "react"
import toHex  from "colornames"

const ThemeColor = ({
    setBgColor, 
    setHexValue, 
    setIsDark, 
    isDark
})=>{
    const inputRef = useRef(); // {current : #color}
    //console.log( toHex("green"))

    const changeHanndle = ()=>{
        setBgColor(inputRef.current.value)
        setHexValue(toHex(inputRef.current.value));
    }

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    return (
    <div>
        <input type="text" 
            onChange={changeHanndle}  
            ref={inputRef}  
            id="color"
        />
        <input type="button" value="DARK"  
                onClick={ ()=>{setIsDark(!isDark)}}
        />
    </div>
    )
}

export default ThemeColor;