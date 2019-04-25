import React from 'react';
import Header from './containers/header/Header';
import TopRow from './containers/topRow/TopRow';
import MidRow from './containers/midRow/MidRow'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="mainDataDiv">
        <TopRow />
        <MidRow />
        <BottomRow />
      </div>
    </React.Fragment>


  );
}

export default App;
