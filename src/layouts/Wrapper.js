import React from 'react'

// SPA
const Wrapper = ({children}) => {
  return (
    <div id="wrapper">
      {children}
      {/* 
        Header, Coin, Home, About, Moive, NotFound...,  Footer
      */}
    </div>
  )
}

// const Wrapper = (props) => {
//   return (
//     <div id="wrapper">
//       <h1>Wrapper Components 역활</h1>
//       {props.children}
//     </div>
//   )
// }

// chidren  props 에 대한 예제 

export default Wrapper
