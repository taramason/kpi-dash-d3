import React from 'react';
import Header from './containers/header/Header';
import TopRow from './containers/topRow/TopRow';
import MidRow from './containers/midRow/MidRow';
import BottomRow from './containers/bottomRow/BottomRow';
import Footer from './containers/footer/Footer';


import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="mainDataDiv">
        <TopRow />
        <MidRow />
        <BottomRow />
      </div>
      <Footer />
    </div>


  );
}

export default App;
