import React from 'react';
import './App.css';
import Header from './Components/Header/header'
import routes from './routes'
import Footer from './Components/Footer/footer'


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
