# props를 이용한 DarkMode 만들기

```App.js

import { useState } from 'react';
import './App.css';
import DarkModeBtn from './components/DarkModeBtn';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App">
        <Header isDark={isDark} setIsDark={ setIsDark } />
        <Section isDark={isDark } />
        <Footer  isDark={isDark } />
    </div>
  );
}

export default App;

```

```DarkModeBtn.js
import React from 'react'
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

const DarkModeBtn = ({isDark, setIsDark}) => {
    const darkBtn = {
        width: "30px", 
        diplay:"flex",
        justifyContent : "center",
        padding: "5px 0",
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

```

```
import React from 'react'
import DarkModeBtn from './DarkModeBtn'

const Header = ({ isDark, setIsDark }) => {
  return (
    <header style={{
         background : isDark ? "white" : "black" , 
         color : isDark ? "black" : "white"}}
    >
      <h1>브랜드네임</h1>
      
      <DarkModeBtn  isDark={isDark} setIsDark={ setIsDark } />
    </header>
  )
}

export default Header
```

```
import React from 'react'

const Section = ({isDark}) => {
  return (
    <section style={{
        background : isDark ? "white" : "black" , 
        color : isDark ? "black" : "white"}}
    >
      section
    </section>
  )
}

export default Section
```

```
import React from 'react'

const Footer = ({isDark}) => {
  return (
    <footer  style={{
        background : isDark ? "white" : "black" , 
        color : isDark ? "black" : "white"}}
    >
      footer
    </footer>
  ) 
}
export default Footer
```


# context를 사용한 DarkMode

1. createContext  : 공통으로 사용할 context 지정 
2. 지정된 context를 provider로 감싸기 : App.js, index.js
3. 각 컴포넌트 중 필요한 곳에서만 불러오기
   const { isDark } = useContext( ThemeContext );

```contexts/ThemeContext.js

import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null); 

const ThemeContextProvider = ({children})=>{
    const [isDark, setIsDark] = useState(true);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children }
        </ThemeContext.Provider>
    )
}

export default  ThemeContext;

````
``` 
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import ThemeContext from './contexts/ThemeContext'; 
import Wrapper from './layouts/Wrapper';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
     <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Wrapper>
        <Header />
        <Section />
        <Footer />
      </Wrapper>
     </ThemeContext.Provider>
  );
}

export default App;

```
```
import React, { useContext } from 'react'
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import ThemeContext from '../contexts/ThemeContext';

const DarkModeBtn = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    
    const darkBtn = {
        width: "30px", 
        diplay:"flex",
        justifyContent : "center",
        padding: "5px 0",
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
```

```
import React from 'react'
import DarkModeBtn from './DarkModeBtn'
import{ useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

const Header = () => {
 const { isDark } = useContext(ThemeContext);

  return (
    <header style={{
         background : isDark ? "white" : "black" , 
         color : isDark ? "black" : "white"}}
    >
      <h1>브랜드네임</h1>
      
      <DarkModeBtn />
    </header>
  )
}

export default Header
```

```
import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

// const Section = ({children}) => {
// const Section = (props) => {
const Section = () => {
 const { isDark } = useContext( ThemeContext );

  return (
    <section style={{
        background : isDark ? "white" : "black" , 
        color : isDark ? "black" : "white"}}
    >
      {/* { props.children } */}
      {/* { children } */}
      <p>section</p>
    </section>
  )
}

export default Section
```

```
import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useContext( ThemeContext );
  
  return (
    <footer  style={{
        background : isDark ? "white" : "black" , 
        color : isDark ? "black" : "white"}}
    >
      footer
    </footer>
  ) 
}
export default Footer
```


# Context.Provider 레이아웃 컴포넌트 & 커스텀 훅 만들기 

