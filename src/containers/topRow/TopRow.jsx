import React, { Component } from 'react';
import './TopRow.css';

const bargraph = () => {
  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
  const w = 500;
  const h = 100;
  
  const svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);
  
  svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("x", (d, i) => i * 30)
     .attr("y", (d, i) => h - 3 * d)
     .attr("width", 25)
     .attr("height", (d, i) => 3 * d)
     // Add your code below this line
     .attr("fill", "navy")
}

class TopRow extends Component {
  state = {  }
  render() { 
    return (  
    <div className="mainDiv">
      <div className="topRowBox">{ bargraph }</div>
      <div className="topRowBox"></div>
      <div className="topRowBox"></div>
      <div className="topRowBox"></div>
      <div className="topRowBox"></div>
    </div>
    );
  }
}
 
export default TopRow;