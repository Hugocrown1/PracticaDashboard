import React from 'react'

export const TablaComposicion = ({ porcentajes, masas, densidad }) => {
  return (
    <div className='w-3/4 bg-white h-fit p-4 rounded-md'>
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
                { porcentajes.masa_grasa.toFixed(2) } %
              </td>
              <td>
                
                { masas.masa_grasa.toFixed(2) } kg
              </td>
            </tr>

            <tr className='border-y'>
              <td className='p-2'>
                Masa osea
              </td>
              <td>
                
                { porcentajes.masa_osea.toFixed(2) } %
              </td>
              <td>
                { masas.masa_osea.toFixed(2) } kg
              </td>
            </tr>

            <tr className='border-y'>
              <td className='p-2'>
                Masa residual
              </td>

              <td>
                
                { porcentajes.masa_residual } %
              </td>

              <td>
                { masas.masa_residual } kg
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                Masa muscular
              </td>
              <td>
                { porcentajes.masa_muscular.toFixed(2) } %
              </td>
              <td>
                { masas.masa_muscular.toFixed(2) } kg
              </td>
            </tr>

          </tbody>
        </table>
        <span className='p-2 font-bold'> Densidad corporal: { densidad.toFixed(3) } </span>
      </div>
  )
}
