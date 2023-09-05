
import React from 'react'

export const Table = ({ percentages, masses, density }) => {
  

  
  return (
    
      <div className='w-4/6 bg-white h-fit p-4 rounded-md'>
       <h1 className='text-xl font-bold mb-2'>Resultados</h1>
      
          <table className='table-auto w-full text-left items-center border-collapse border-y mb-2 '>
            <thead>
              <tr>
                <th className='p-2'>
                  Componente
                </th>
                <th>
                  Porcentaje
                </th>
                <th>
                  Kilogramos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-y'>
                <td className='p-2'>
                  Masa grasa
                </td>
                <td>
                  { percentages.fat_mass.toFixed(2) } %
                </td>
                <td>
      
                  { masses.fat_mass.toFixed(2) } kg
                </td>
              </tr>
              <tr className='border-y'>
                <td className='p-2'>
                  Masa ósea
                </td>
                <td>
      
                  { percentages.bone_mass.toFixed(2) } %
                </td>
                <td>
                  { masses.bone_mass.toFixed(2) } kg
                </td>
              </tr>
              <tr className='border-y'>
                <td className='p-2'>
                  Masa residual
                </td>
                <td>
      
                  { percentages.residual_mass.toFixed(2) } %
                </td>
                <td>
                  { masses.residual_mass.toFixed(2) } kg
                </td>
              </tr>
              <tr>
                <td className='p-2'>
                  Masa muscular
                </td>
                <td>
                  { percentages.muscular_mass.toFixed(2) } %
                </td>
                <td>
                  { masses.muscular_mass.toFixed(2) } kg
                </td>
              </tr>
            </tbody>
          </table>
          <span className='p-2 font-bold'> Densidad corporal: { density.toFixed(3) } </span>
        </div>

       
    
  )
}
