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

  const [porcentajes, setPorcentajes] = useState({
    masa_osea: null,
    masa_grasa: null,
    masa_residual: null
  })

  const [masas, setMasas] = useState({
      masa_osea: null,
      masa_grasa: null,
      masa_residual: null
    
  })

 
 

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

    
    const osea = ( Math.pow( Math.pow(talla, 2) * (femur/100) * (bistiloideo/100) * 400, 0.712 ) * 3.02 )
    setMasas((prevValues) => ({
      ...prevValues,
      masa_osea: osea
    }))

   
    if(genero === 'hombre'){
      resultado = 1.1765 - (0.0744 * Math.log10(sumaPliegues) )

      residual = peso * 0.24

    } else {
      // mujer
      resultado = 1.1567 - (0.0717 * Math.log10(sumaPliegues) )

      residual = peso * 0.21
      
    }
    setMasas((prevValues) => ({
      ...prevValues,
      masa_residual: residual
    }))

    setDensidad(resultado)

    const grasa =  (495 / resultado) - 450 
    setPorcentajes((prevValues) => ({
      ...prevValues,
      masa_grasa: grasa
    }))
   

    //Sumatoria porcentajes
    const porcentajeMasaOsea = osea * 100 / peso
    setPorcentajes((prevValues) => ({
      ...prevValues,
      masa_osea: porcentajeMasaOsea
    }))

    const porcentajeMasaResidual = residual * 100 / peso
    setPorcentajes((prevValues) => ({
      ...prevValues,
      masa_residual: porcentajeMasaResidual
    }))


    const masaGrasaKilos = peso * ( grasa / 100 )
    setMasas((prevValues) => ({
      ...prevValues,
      masa_grasa: masaGrasaKilos
    }))


    
    
  }


  return (
    <div className='grid grid-cols-2 gap-x-6 bg-[#003459] items-center justify-center p-8 h-screen'>
      
      <div className='bg-[#ffff] text-black rounded-md w-full h-fit mx-auto px-6 py-4 shadow-lg'>
      <h1 className='text-xl font-bold mb-5'>Composición corporal</h1>
        
          
          <form onSubmit={handleSubmit}>

                  {/* Datos personales */}
                  <h2 className='font-medium text-gray-500 mb-2'>Datos Personales</h2>
                 <div className='grid grid-cols-2 gap-x-6 gap-y-2 mb-4 font-bold'>
                      
                   <div className='flex flex-col'>
                    <h2>Genero</h2>

                    <div className='flex gap-x-6 justify-center items-center pt-2'>

                      <div className='flex flex-row space-x-2'>
                        <label className='font-normal' htmlFor="genero-hombre">Masculino</label>
                        <input className='form-input ' type="radio"  name='genero' value='hombre' required onChange={handleInputChange} />
                      </div>

                      <div className='flex flex-row space-x-2'>
                        <label className='font-normal' htmlFor="genero-mujer">Femenino</label>
                        <input className='form-input ' type="radio"  name='genero' value='mujer' required onChange={handleInputChange}  />
                      </div>

                    </div>


                   </div>
                               
                    <div className='flex flex-col relative'>
                      <label htmlFor="peso">Peso</label>
                      <input className='form-input' type="number" name='peso' value={inputValues.peso} placeholder='Ingrese su peso' required onChange={handleInputChange}/>
                      <span className="input-extent">kg</span>
                    </div>
                               
                    <div className='flex flex-col relative'>
                      <label htmlFor="talla">Talla</label>
                      <input className='form-input' type="number" name='talla' value={inputValues.talla} placeholder='Ingrese su talla' required onChange={handleInputChange}/>
                      <span className="input-extent">m</span>
                    </div>
                               
                    <div className='flex flex-col'>
                      <label htmlFor="edad">Edad</label>
                      <input className='form-input' type="number" name='edad' value={inputValues.edad} placeholder='Ingrese su edad' required onChange={handleInputChange}/>
                    </div>

                    
                 </div>

                 <h2 className='font-medium text-gray-500 mb-2'>Pliegues</h2>
                   <div className='grid grid-cols-2 gap-x-6 gap-y-2 font-bold'>

                   

                     <div className='flex flex-col relative'>
                       <label htmlFor='bicep'>Bicipital</label>
                       <input className='form-input' type="number" name='bicep' value={inputValues.bicep} required onChange={handleInputChange}/>
                       <span className="input-extent">mm</span>
                     </div>

                     <div className='flex flex-col relative'>
                       <label htmlFor='tricep'>Tricipital</label>
                       <input className='form-input' type="number" name='tricep' value={inputValues.tricep} required onChange={handleInputChange}/>
                       <span className="input-extent">mm</span>
                     </div>
                     <div className='flex flex-col relative'>
                       <label htmlFor='subscapular'>Subscapular</label>
                       <input className='form-input' type="number" name='subscapular' value={inputValues.subscapular} required onChange={handleInputChange}/>
                       <span className="input-extent">mm</span>
                     </div>
                      <div className='flex flex-col relative'>
                        <label htmlFor='supraileaco'>Supraileaco</label>
                        <input className='form-input' type="number" name='supraileaco' value={inputValues.supraileaco} required onChange={handleInputChange}/>
                        <span className="input-extent">mm</span>
                      </div>

                      <div className='flex flex-col relative'>
                       <label htmlFor='femur'>Femur</label>
                       <input className='form-input' type="number" name='femur' value={inputValues.femur} required onChange={handleInputChange}/>
                       <span className="input-extent">cm</span>
                     </div>

                    <div className='flex flex-col relative'>
                       <label htmlFor='bistiloideo'>Biestiloideo</label>
                       <input className='form-input' type="number" name='bistiloideo' value={inputValues.bistiloideo} required onChange={handleInputChange}/>
                       <span className="input-extent">cm</span>
                     </div>

                   </div>

                   <button className='mt-2 p-2 bg-[#00b4d8] text-black rounded-md' type='submit'>Calcular</button>
          </form>

      </div>


     { densidad && <div className='w-3/4 bg-white h-fit p-4 rounded-md'>
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
                {/* Este se saca */}
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
                { (100 - (porcentajes.masa_grasa + porcentajes.masa_osea + porcentajes.masa_residual)).toFixed(2) } %
              </td>
              <td>
                { ( inputValues.peso - ( masas.masa_grasa + masas.masa_osea + masas.masa_residual ) ).toFixed(2) } kg
              </td>
            </tr>

          </tbody>
        </table>
        <span className='p-2 font-bold'> Densidad corporal: { densidad.toFixed(3) } </span>
      </div> }
    </div>
  )
}

export default Densidad
