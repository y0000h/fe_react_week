import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null); 

export const ThemeContextProvider = ({children})=>{
    const [isDark, setIsDark] = useState(true);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children }
        </ThemeContext.Provider>
    )
}

// hook 
export  const  useThemeContext = ()=>{
    return useContext(ThemeContext);
}
 

/*
1. createContext  : 공통으로 사용할 context 지정 
2. 지정된 context를 provider로 감싸기 : App.js, index.js
3. 각 컴포넌트 중 필요한 곳에서만 불러오기
   const { isDark } = useContext( ThemeContext );
*/