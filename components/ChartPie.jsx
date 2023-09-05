import React, { useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';



export const ChartPie = ({ porcentajes }) => {
  const chartRef = useRef(null);



    
    useEffect(() => {
      const {masa_grasa, masa_osea, masa_residual, masa_muscular} = porcentajes
   
    
    const ctx = document.getElementById('myChart');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
     const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Masa grasa', 'Masa osea', 'Masa residual', 'Masa muscular'],
        datasets: [{
          label: '% Porcentaje',
          data: [masa_grasa.toFixed(2), masa_osea.toFixed(2), masa_residual, masa_muscular.toFixed(2)],
          backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen'],
          borderWidth: 1,
          hoverOffset: 10
        }]
      },
      options: {
        
        plugins: {
          
          subtitle: {
              display: true,
              text: 'Porcentajes de grasa corporal'
          }
      }
       
      }
    });

    chartRef.current = newChart;
    }, [porcentajes])
    
    
  return (
    <div className='relative w-4/6 h-auto rounded-md bg-white flex flex-col p-4 my-auto'>
    <h1 className='text-xl font-bold mb-2'>Gráfica de pastel</h1>
    
      <canvas id='myChart' ></canvas>
    </div>
  )
}
