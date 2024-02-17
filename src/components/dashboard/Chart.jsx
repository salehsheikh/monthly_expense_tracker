import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Chart = ({ budget, expense, remainingBudget }) => {
  // Data for the chart based on budget, expense, and remaining budget
  const chartData = [
    { data: [Number(budget)], label: 'Budget' },
    { data: [Number(expense)], label: 'Expense' },
    { data: [Number(remainingBudget)], label: 'Remaining Budget' },
  ];

  return (
    <BarChart
      series={chartData}
      width={600}
      height={350}
      options={{
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: 'Budget, Expense, and Remaining Budget',
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return '$' + value;
              },
            },
          },
        },
      }}
    />
  );
};

export default Chart;
