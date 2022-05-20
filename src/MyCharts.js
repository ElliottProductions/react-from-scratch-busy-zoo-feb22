import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from 'victory';

export default function MyCharts() {
  return (
    <div className="chart-padding">
      <h4>Wealth in Trillions of USD</h4>
      <VictoryChart
        domainPadding={40}
      >
        
        <VictoryBar
          width={1000}
          
          data={[
            { demo: 'Lower', wealth: 3 },
            { demo: 'Middle', wealth: 35 },
            { demo: 'Millionaires', wealth: 141.7 },
            { demo: 'Billionaires', wealth: 4.18 }
          ]}
          
          x="demo"
          y="wealth"
        />
      </VictoryChart>
      <h4>Percentage of US population </h4>
      <p>(Billionaires not pictured due to the fact that they would be invisible on this chart)</p>
      <VictoryPie
        width={1000}
        colorScale={['orange', 'purple', 'cyan']}
        data={[
          { class: 'Lower Class', population: 144000000 },
          { class: 'Middle Class', population: 165000000 },
          { class: 'Millionaires', population: 20270000 }
        ]}
        x="class"
        y="population"
      />

    </div>
  );
}
