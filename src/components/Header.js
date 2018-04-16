import React from 'react';

const Header = props => (
  <header>
    <h3>{props.title}</h3>
    <h4>{props.another}</h4>
    <nav>
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
    </nav>
    <button onClick={props.increase}>Increase</button>
  </header>
);

export default Header;