import React from 'react';
import './App.css';
import Header from './Components/Header/header'
import routes from './routes'
import Login from './Components/Login/login'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      {/* <Login /> */}
    </div>
  );
}

export default App;
