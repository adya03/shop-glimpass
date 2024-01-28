import React from 'react';
import { Line } from 'react-chartjs-2';
import footfallData from '../data/footfallData.json';  // Adjust path to your footfallData.json file
import 'chartjs-adapter-date-fns';

const FootfallGraph = () => {
    const labels = footfallData.data.map(item => item.date);
    const footfall = footfallData.data.map(item => item.footfall);

    const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Footfall',
            data: footfall,
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
    };

    const options = {
        scales: {
          x: {
            type: 'time',
            time: {
              parser: 'yyyy-mm-dd',
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Footfall',
            },
          },
        },
    };

    return (
        <center>
        <h1>FootFall Data for a month</h1>
        <div className="chart-container">
            <Line data={chartData} options={options} />
        </div>
        </center>
    );
};

export default FootfallGraph;