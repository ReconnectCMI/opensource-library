import './App.css';
import Container from '@material-ui/core/Container';
import React from 'react';
import MenuDesktop from '../menu/Menu';
import Header from '../header/Header';
import IconCardPage from '../card/IconCardPage';

function App() {
  return (
    <Container maxWidth="100%" className="App">
      <MenuDesktop />
      <Header />
      <IconCardPage />
    </Container>
  );
}

export default App;
