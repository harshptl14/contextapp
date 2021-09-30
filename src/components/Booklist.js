import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Booklist = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
    <ul>
      <li style={{background : theme.ui}}>the way of kings</li>
      <li style={{background : theme.ui}}>Alchemist</li>
      <li style={{background : theme.ui}}>the power of a mind</li>
    </ul>
  </div>
  )
}

export default Booklist
