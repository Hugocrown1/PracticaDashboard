'use client'

import React, { useEffect, useState } from 'react'

export const Densidad = () => {

  const [input, setInput] = useState('')

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hola');
  }
  return (
    <div className='flex flex-col items-center justify-center p-14 h-screen'>
      <h1 className='text-xl font-bold mb-4'>COMPOSICION CORPORAL</h1>
      <div className='bg-[#003459] text-white rounded-md w-full h-full mx-auto p-4'>
        
          
          <form onSubmit={handleSubmit}>

                    <h2>Genero</h2>
                   <input className='rounded-md' type="text" id='genero' />
            
                   <h2>Peso</h2>
                   <input className='rounded-md' type="text" />
            
                   <h2>Talla</h2>
                   <input className='rounded-md' type="text" />
            
                   <h2>Edad</h2>
                   <input className='rounded-md' type="text" />
            
                   <h2>Biciphal</h2>
                   <input className='rounded-md' type="text" />
            
                   <h2>Tyciptal</h2>
                   <input className='rounded-md' type="text" />

                   <h2>Supescapular</h2>
                   <input className='rounded-md' type="text" />

                    <h2>Suprailecao</h2>
                   <input className='rounded-md' type="text" /> <br />

                   <button className='mt-2 p-2 bg-white text-black rounded-md' type='submit'>Calcular</button>
          </form>
       



      </div>
    </div>
  )
}

export default Densidad
