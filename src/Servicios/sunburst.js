import React from 'react';
import Sunburst from 'react-sunburst-d3-v4';
import Data from './data-chart';

// Grafico D3 Sunburst
class Chart extends React.Component {
  onSelect(event) {
    console.log(event);
  }
  render() {
    return (
      <div className="Chart">
        <Sunburst
          data={Data}
          onSelect={this.onSelect}
          scale="linear"
          tooltipContent={<div class="sunburstTooltip" style="position:inicial; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center; float: right;" />}
          tooltip
          tooltipPosition="right"
          keyId="sunburstGra"
          width="435"
          height="400"
        />
      </div>
    );
  }
}

export default Chart 