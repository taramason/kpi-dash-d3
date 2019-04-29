import React, { Component } from 'react';
// import { withFauxDOM } from 'react-faux-dom'



class BarChart1 extends Component {
  // createBarChart() {
  //   const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
      
  //   const w = 500;
  //   const h = 100;
    
  //   const svg = d3.select("body")
  //                 .append("svg")
  //                 .attr("width", w)
  //                 .attr("height", h);
    
  //   svg.selectAll("rect")
  //      .data(dataset)
  //      .enter()
  //      .append("rect")
  //      .attr("x", (d, i) => i * 30)
  //      .attr("y", (d, i) => h - 3 * d)
  //      .attr("width", 25)
  //      .attr("height", (d, i) => 3 * d)
  //      // Add your code below this line
  //      .attr("fill", "navy")
  // }
  render() { 
    return ( 
      <div>
        <svg width={500} height={500}>
        {/* {this.createBarChart()} */}
        </svg>
      </div>
     );
  }
}
 
export default BarChart1;