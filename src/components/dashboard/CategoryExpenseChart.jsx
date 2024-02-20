import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const CategoryExpenseChart = ({ categoryExpenses }) => {
  // Check if categoryExpenses is empty or undefined
  if (!categoryExpenses || categoryExpenses.length === 0) {
    return <div>No data available</div>;
  }

  // Extracting category names and expenses from categoryExpenses array
  const categories = categoryExpenses.map(item => item.category);
  const expenses = categoryExpenses.map(item => item.expense);

  const chartData = categories.map((category, index) => ({
    label: category,
    data: [expenses[index]],
  }));

  return (
    <BarChart
      series={chartData}
      width={430}
      height={300}
      options={{
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: 'Expenses by Category',
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

export default CategoryExpenseChart;
