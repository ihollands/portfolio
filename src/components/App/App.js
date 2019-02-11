import React, { Component } from 'react';
import AppStyled from './App.styled';

import Polarity from '../Polarity/Polarity';


class App extends Component {
  render() {
    return (
      <AppStyled>
        <Polarity x="0" y="0" />
        <Polarity x="100vw" y="0" />
        <Polarity x="100vw" y="100vh" />
        <Polarity x="0" y="100vh" />
      </AppStyled>
    );
  }
}

export default App;
