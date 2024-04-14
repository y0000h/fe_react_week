```// rafce
import { useRef, useEffect, useState } from "react"

const ThemeColor = ()=>{
    const inputRef = useRef(); // {current : #color}
    const [bgColor, setBgColor] = useState("white");

    // const changeHanndle = (event)=>{
    //     console.log(event.target.value)
    // }
    const changeHanndle = ()=>{
        //console.log(inputRef.current.value);
        setBgColor(inputRef.current.value)
    }

    // 맨처음 load될때 한번 실행한다.
    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    return (
    <div style={{ background : bgColor}}>
        <input type="text" 
            onChange={changeHanndle}  
            ref={inputRef}  
            id="color"
        />
    </div>
    )
}

export default ThemeColor;
```