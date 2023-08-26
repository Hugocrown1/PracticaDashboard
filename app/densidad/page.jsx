'use client'

import React, { useState } from 'react'

export const Densidad = () => {

  const [inputValues, setInputValues] = useState({
    genero: '',
    peso: '',
    talla: '',
    edad: '',
    bicep: '',
    tricep: '',
    subscapular: '',
    supraileaco: ''
  })

  const [densidad, setDensidad] = useState(null)
  const [porcentajeGraso, setPorcentajeGraso] = useState(null)
 

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
  
    let parsedValue = value;
  
    if (type === 'number' && value !== '') {
      parsedValue = parseFloat(value);
    }
  
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const { genero, peso, talla, edad, bicep, tricep, subscapular, supraileaco } = inputValues

    const sumaPliegues = tricep + bicep + subscapular + supraileaco

    if(genero === 'hombre'){
      const resultado = 1.1765 - (0.0744 * Math.log10(sumaPliegues) )
      const grasa =  (495 / resultado) - 450 

      setPorcentajeGraso(grasa.toFixed(2))

      setDensidad(resultado.toFixed(3))
    }

    
    
  }


  return (
    <div className='flex flex-col items-center justify-center p-14 h-screen'>
      <h1 className='text-xl font-bold mb-4'>COMPOSICION CORPORAL</h1>
      <div className='bg-[#003459] text-white rounded-md w-2/4 h-full mx-auto p-4'>
        
          
          <form onSubmit={handleSubmit}>

                    
                   <div className='flex flex-col'>
                    Genero: 
                    <input className='form-input' type="text"  name='genero' value={inputValues.genero}  onChange={handleInputChange}/>
                    </div>
            
                   <div className='flex flex-col'>
                     Peso:
                     <input className='form-input' type="number" name='peso' value={inputValues.peso} onChange={handleInputChange}/>
                   </div>
            
                   <div className='flex flex-col'>
                     Talla:
                     <input className='form-input' type="number" name='talla' value={inputValues.talla} onChange={handleInputChange}/>
                   </div>
            
                   <h2>Edad</h2>
                   <input className='form-input' type="number" name='edad' value={inputValues.edad} onChange={handleInputChange}/>
            
                   <h2>Bicep</h2>
                   <input className='form-input' type="number" name='bicep' value={inputValues.bicep} onChange={handleInputChange}/>
            
                   <h2>Tricep</h2>
                   <input className='form-input' type="number" name='tricep' value={inputValues.tricep} onChange={handleInputChange}/>

                   <h2>Subscapular</h2>
                   <input className='form-input' type="number" name='subscapular' value={inputValues.subscapular} onChange={handleInputChange}/>

                    <h2>Supraileaco</h2>
                   <input className='form-input' type="number" name='supraileaco' value={inputValues.supraileaco} onChange={handleInputChange}/> <br />

                   <button className='mt-2 p-2 bg-white text-black rounded-md' type='submit'>Calcular</button>
          </form>

         { densidad && <div>
           <h2>Densidad corporal: {densidad}</h2>
           <h2>Porcentaje graso: { porcentajeGraso }%</h2>
         </div> }
       



      </div>
    </div>
  )
}

export default Densidad
