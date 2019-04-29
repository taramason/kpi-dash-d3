import React, { Component } from 'react';
import BarChart1 from '../barchart1/Barchart1';
import './TopRow.css';

class TopRow extends Component {
  state = {  }
  render() { 
    return (  
    <div className="mainDiv">
      <div className="topRowBox">
        <BarChart1   dataset ={ [12, 31, 22, 17, 25, 18, 29, 14, 9] } />
      </div>
      <div className="topRowBox"></div>
      <div className="topRowBox"></div>
      <div className="topRowBox"></div>
      <div className="topRowBox"></div>
    </div>
    );
  }
}
 
export default TopRow;