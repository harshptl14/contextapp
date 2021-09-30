import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
        <ul>
          <li style={{background : theme.ui}}>the way of kings</li>
          <li style={{background : theme.ui}}>Alchemist</li>
          <li style={{background : theme.ui}}>the power of a mind</li>
        </ul>
      </div>
    );
  }
}
export default Booklist;
