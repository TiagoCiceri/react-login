import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

//import Dash from './pages/Dash';
import GlobalStyles from './styles/global';
import Routes from './components/Routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <ReactNotification />
      <Routes />
    </>
  );
}

export default App;
