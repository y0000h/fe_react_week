import React from 'react'

const Square = ({bgColor,  hexValue, isDark}) => {
  const sectionStyle = {
    width: "200px",
    height: "200px",
    margin: "auto",
    background : bgColor,
    display: "flex",
    flexDirection: "column",
    justifyContent : "flex-end",
    alignItems : "center",
    color : isDark ? "black" : "white"
  }
  return (
    <section style={ sectionStyle}>
      <p>{ bgColor ? bgColor : "색이름을 입력하세요."}</p>
      <p>{ hexValue ?  hexValue : null }</p>
    </section>
  )
}

export default Square
