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

    //Valores de los inputs
    const { genero, bicep, tricep, subscapular, supraileaco } = inputValues

    const sumaPliegues = tricep + bicep + subscapular + supraileaco

    let resultado

    if(genero === 'hombre'){
      resultado = 1.1765 - (0.0744 * Math.log10(sumaPliegues) )
    } else {
      // mujer
      resultado = 1.1567 - (0.0717 * Math.log10(sumaPliegues) )
      
    }

    setDensidad(resultado)

    const grasa =  (495 / resultado) - 450 

    setPorcentajeGraso(grasa.toFixed(2))

    
    
  }


  return (
    <div className='flex flex-col bg-[#003459] items-center justify-center p-6 h-screen'>
      
      <div className='bg-[#ffff] text-black rounded-md w-2/4 h-3/4 mx-auto px-6 py-4 shad'>
      <h1 className='text-xl font-bold mb-5'>COMPOSICIÓN CORPORAL</h1>
        
          
          <form onSubmit={handleSubmit}>

                  {/* Datos personales */}
                  <h2 className='font-medium text-gray-500 mb-2'>Datos Personales</h2>
                 <div className='grid grid-cols-2 gap-x-6 gap-y-2 mb-4 font-bold'>
                      
                   <div className='flex flex-col'>
                    <h2>Genero</h2>

                    <div className='flex space-x-12 justify-center items-center pt-2'>

                      <div className='flex flex-row space-x-4'>
                        <label className='font-normal' htmlFor="genero-hombre">Hombre</label>
                        <input className='form-input ' type="radio"  name='genero' value='hombre' required onChange={handleInputChange} />
                      </div>

                      <div className='flex flex-row space-x-4'>
                        <label className='font-normal' htmlFor="genero-mujer">Mujer</label>
                        <input className='form-input ' type="radio"  name='genero' value='mujer' required onChange={handleInputChange}  />
                      </div>

                    </div>


                   </div>
                               
                    <div className='flex flex-col relative'>
                      <label htmlFor="peso">Peso</label>
                      <input className='form-input' type="number" name='peso' value={inputValues.peso} placeholder='Ingrese su peso' onChange={handleInputChange}/>
                      <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">kg</span>
                    </div>
                               
                    <div className='flex flex-col'>
                      <label htmlFor="talla">Talla</label>
                      <input className='form-input' type="number" name='talla' value={inputValues.talla} placeholder='Ingrese su talla' onChange={handleInputChange}/>
                    </div>
                               
                    <div className='flex flex-col'>
                      <label htmlFor="edad">Edad</label>
                      <input className='form-input' type="number" name='edad' value={inputValues.edad} placeholder='Ingrese su edad' onChange={handleInputChange}/>
                    </div>
                 </div>

                 <h2 className='font-medium text-gray-500 mb-2'>Pliegues</h2>
                   <div className='grid grid-cols-2 gap-x-6 gap-y-2 font-bold'>
                     <div className='flex flex-col relative'>
                       <label htmlFor='bicep'>Bicep</label>
                       <input className='form-input' type="number" name='bicep' value={inputValues.bicep} required onChange={handleInputChange}/>
                       <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">mm</span>
                     </div>
                     <div className='flex flex-col relative'>
                       <label htmlFor='tricep'>Tricep</label>
                       <input className='form-input' type="number" name='tricep' value={inputValues.tricep} required onChange={handleInputChange}/>
                       <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">mm</span>
                     </div>
                     <div className='flex flex-col relative'>
                       <label htmlFor='subscapular'>Subscapular</label>
                       <input className='form-input' type="number" name='subscapular' value={inputValues.subscapular} required onChange={handleInputChange}/>
                       <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">mm</span>
                     </div>
                      <div className='flex flex-col relative'>
                        <label htmlFor='supraileaco'>Supraileaco</label>
                        <input className='form-input' type="number" name='supraileaco' value={inputValues.supraileaco} required onChange={handleInputChange}/>
                        <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">mm</span>
                      </div>
                   </div>

                   <button className='mt-2 p-2 bg-[#00b4d8] text-black rounded-md' type='submit'>Calcular</button>
          </form>

         { densidad && <div>
           <h2>Densidad corporal: {densidad.toFixed(3)}</h2>
           <h2>Porcentaje graso: { porcentajeGraso }%</h2>
         </div> }
       



      </div>
    </div>
  )
}

export default Densidad
