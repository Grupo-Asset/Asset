import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Mantenemos una referencia al objeto de instancia del gráfico

  useEffect(() => {
    if (chartRef.current && chartData) {
      const ctx = chartRef.current.getContext('2d');

      // Destruimos el gráfico anterior si existe
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Creamos un nuevo gráfico
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: 'Mi inversion',
              data: chartData.values,
              borderColor: 'rgb(255, 99, 132)',
              yAxisID: 'y',
            },
            {
              label: 'Otra cosa',
              data: chartData.values2,
              borderColor: 'rgb(54, 162, 235)',
              yAxisID: 'y1',
            }
          ]
        },
        options: {
          // Opciones de configuración del gráfico
        }
      });
    }
  }, [chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    values: [65, 59, 80, 81, 66, 95],
    values2: [10, 69, 85, 76, 60, 65]
  }]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200" justify-content="center" />
    </div>
  );
};

export default LineChart;
