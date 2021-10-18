import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    console.log(this.context);
    return (
      <button
        {...this.props}
        style={{ background: this.context.background, color: this.context.fontColor }}
        className="btn"
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
