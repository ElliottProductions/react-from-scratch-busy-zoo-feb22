import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from 'victory';

export default function MyCharts() {
  return (
    <div className="chart-padding">
      <VictoryChart
        domainPadding={40}
      >
          
        <VictoryBar
          width={1000}
          
          data={[
            { quarter: 'Middle Class', earnings: 35000000000000, colorScale: 'blue' },
            { quarter: 'Millionaire Wealth', earnings: 141700000000000 },
            { quarter: 'Billionaire Wealth', earnings: 4180000000000 }
          ]}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  
      <VictoryPie
        width={1000}
        colorScale={['tomato', 'rebeccapurple', 'gold', 'cyan']}
        data={[
          { quarter: 'Lower Class', earnings: 144000000 },
          { quarter: 'Middle Class', earnings: 165000000 },
          { quarter: 'Millionaires', earnings: 20270000 }
        ]}
        x="quarter"
        y="earnings"
      />

    </div>
  );
}
