import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CarbonGaugeProps {
  score: number;
  size?: number;
  animated?: boolean;
}

const CarbonGauge: React.FC<CarbonGaugeProps> = ({ 
  score, 
  size = 200, 
  animated = true 
}) => {
  const chartRef = useRef<ChartJS<'doughnut'>>(null);

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#22C55E'; // Green
    if (score >= 60) return '#EAB308'; // Yellow
    if (score >= 40) return '#F97316'; // Orange
    return '#EF4444'; // Red
  };

  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [
          getScoreColor(score),
          '#F3F4F6'
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animation: {
      animateRotate: animated,
      duration: 2000,
    },
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Doughnut ref={chartRef} data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-gray-800">
          {Math.round(score)}
        </div>
        <div className="text-sm text-gray-600">
          Carbon Score
        </div>
      </div>
    </div>
  );
};

export default CarbonGauge;