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
    supraileaco: '',
    femur: '',
    bistiloideo: ''
  })

  const [densidad, setDensidad] = useState(null)
  const [porcentajeGraso, setPorcentajeGraso] = useState(null)
  const [masaOsea, setMasaOsea] = useState(null)
  const [masaResidual, setMasaResidual] = useState(null)
 

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
    const { genero, bicep, tricep, subscapular, supraileaco, femur, bistiloideo, talla, peso } = inputValues

    const sumaPliegues = tricep + bicep + subscapular + supraileaco

    let resultado
    let residual

    //TODO: Masa osea
    const osea = ( Math.pow( Math.pow(talla, 2) * femur * bistiloideo * 400, 0.712 ) * 3.02 )

    setMasaOsea(osea)

    if(genero === 'hombre'){
      resultado = 1.1765 - (0.0744 * Math.log10(sumaPliegues) )


      //TODO: Masa residual
      residual = peso * 0.24

    } else {
      // mujer
      resultado = 1.1567 - (0.0717 * Math.log10(sumaPliegues) )

      residual = peso * 0.21
      
    }

    setMasaResidual(residual)

    setDensidad(resultado)

    const grasa =  (495 / resultado) - 450 

    setPorcentajeGraso(grasa.toFixed(2))

    
    
  }


  return (
    <div className='flex flex-col bg-[#003459] items-center justify-center p-6 h-screen'>
      
      <div className='bg-[#ffff] text-black rounded-md w-2/4 h-full mx-auto px-6 py-4 shad'>
      <h1 className='text-xl font-bold mb-5'>COMPOSICIÓN CORPORAL</h1>
        
          
          <form onSubmit={handleSubmit}>

                  {/* Datos personales */}
                  <h2 className='font-medium text-gray-500 mb-2'>Datos Personales</h2>
                 <div className='grid grid-cols-2 gap-x-6 gap-y-2 mb-4 font-bold'>
                      
                   <div className='flex flex-col'>
                    <h2>Genero</h2>

                    <div className='flex space-x-10 justify-center items-center pt-2'>

                      <div className='flex flex-row space-x-4'>
                        <label className='font-normal' htmlFor="genero-hombre">Masculino</label>
                        <input className='form-input ' type="radio"  name='genero' value='hombre' required onChange={handleInputChange} />
                      </div>

                      <div className='flex flex-row space-x-4'>
                        <label className='font-normal' htmlFor="genero-mujer">Femenino</label>
                        <input className='form-input ' type="radio"  name='genero' value='mujer' required onChange={handleInputChange}  />
                      </div>

                    </div>


                   </div>
                               
                    <div className='flex flex-col relative'>
                      <label htmlFor="peso">Peso</label>
                      <input className='form-input' type="number" name='peso' value={inputValues.peso} placeholder='Ingrese su peso' required onChange={handleInputChange}/>
                      <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">kg</span>
                    </div>
                               
                    <div className='flex flex-col relative'>
                      <label htmlFor="talla">Talla</label>
                      <input className='form-input' type="number" name='talla' value={inputValues.talla} placeholder='Ingrese su talla' required onChange={handleInputChange}/>
                      <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">m</span>
                    </div>
                               
                    <div className='flex flex-col'>
                      <label htmlFor="edad">Edad</label>
                      <input className='form-input' type="number" name='edad' value={inputValues.edad} placeholder='Ingrese su edad' required onChange={handleInputChange}/>
                    </div>

                    
                 </div>

                 <h2 className='font-medium text-gray-500 mb-2'>Pliegues</h2>
                   <div className='grid grid-cols-2 gap-x-6 gap-y-2 font-bold'>

                   <div className='flex flex-col relative'>
                       <label htmlFor='femur'>Femur</label>
                       <input className='form-input' type="number" name='femur' value={inputValues.femur} required onChange={handleInputChange}/>
                       <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">m</span>
                     </div>

                    <div className='flex flex-col relative'>
                       <label htmlFor='bistiloideo'>Bistiloideo</label>
                       <input className='form-input' type="number" name='bistiloideo' value={inputValues.bistiloideo} required onChange={handleInputChange}/>
                       <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">m</span>
                     </div>

                     <div className='flex flex-col relative'>
                       <label htmlFor='bicep'>Bicipital</label>
                       <input className='form-input' type="number" name='bicep' value={inputValues.bicep} required onChange={handleInputChange}/>
                       <span className="absolute inset-y-2 right-6 font-normal text-sm text-gray-400 flex items-end">mm</span>
                     </div>

                     <div className='flex flex-col relative'>
                       <label htmlFor='tricep'>Tricipital</label>
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

         { densidad && <div >
           <span>Densidad corporal: {densidad.toFixed(3)}</span>
           <br />
           <span>Porcentaje graso: { porcentajeGraso }%</span>
           <br />
           <span>{ masaOsea.toFixed(2) }</span>
           <br />
           <span>{ masaResidual } kg</span>
         </div> }
       



      </div>
    </div>
  )
}

export default Densidad
