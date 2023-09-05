import React, { useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';



export const ChartPie = ({ porcentajes }) => {
  const chartRef = useRef(null);



    
    useEffect(() => {
      const {masa_grasa, masa_osea, masa_residual, masa_muscular} = porcentajes
    console.log(masa_grasa);
    
    const ctx = document.getElementById('myChart');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
     const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Masa grasa', 'Masas osea', 'Masa residual', 'Masa muscular'],
        datasets: [{
          label: 'Porcentaje',
          data: [masa_grasa, masa_osea, masa_residual, masa_muscular],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    chartRef.current = newChart;
    }, [porcentajes])
    
    
  return (
    <div className=' rounded-md bg-white flex flex-col p-4 my-4'>
    <h1 className='text-xl font-bold mb-2'>Gráfica de pastel</h1>
    
      <canvas id='myChart' width='200' height='200'></canvas>
    </div>
  )
}
