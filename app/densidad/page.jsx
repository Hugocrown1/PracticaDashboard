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

 const [sumatoriaMasa, setSumatoriaMasa] = useState(null)
 const [residualResta, setResidualResta] = useState(null)
 

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
    setMasaOsea(osea)

    if(genero === 'hombre'){
      resultado = 1.1765 - (0.0744 * Math.log10(sumaPliegues) )

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

    //Sumatoria porcentajes
    const porcentajeMasaOsea = osea * 100 / peso
    const porcentajeMasaResidual = residual * 100 / peso

    const porcentajeMasaMuscular = 100 - (porcentajeMasaOsea + porcentajeMasaResidual + grasa)

    setSumatoriaMasa(porcentajeMasaMuscular)

    //Resta de masas
    const masaGrasaKilos = peso * ( grasa / 100 )
    const masaResidualKilos = peso - ( residual + osea + masaGrasaKilos )

    setResidualResta(masaResidualKilos)





    
    
  }


  return (
    <div className='grid grid-cols-2 bg-[#003459] items-center justify-center p-6 h-screen'>
      
      <div className='bg-[#ffff] text-black rounded-md w-fit h-fit mx-auto px-6 py-4 shad'>
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
                       <label htmlFor='femur'>Femur</label>
                       <input className='form-input' type="number" name='femur' value={inputValues.femur} required onChange={handleInputChange}/>
                       <span className="input-extent">cm</span>
                     </div>

                    <div className='flex flex-col relative'>
                       <label htmlFor='bistiloideo'>Biestiloideo</label>
                       <input className='form-input' type="number" name='bistiloideo' value={inputValues.bistiloideo} required onChange={handleInputChange}/>
                       <span className="input-extent">cm</span>
                     </div>

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
                   </div>

                   <button className='mt-2 p-2 bg-[#00b4d8] text-black rounded-md' type='submit'>Calcular</button>
          </form>

         { densidad && <div >
           <span>Densidad corporal: {densidad.toFixed(3)}</span>
           <br />
           <span>Porcentaje graso: { porcentajeGraso }%</span>
           <br />
           <span>Masa ósea: { masaOsea.toFixed(2) } kg</span>
           <br />
           <span>Masa residual: { masaResidual } kg</span>
         </div> }
       



      </div>


     { densidad && <div className='w-full bg-white h-full p-4 items-center justify-center rounded-md'>
        
        <table className='w-full text-center'>
          <tr>
            <th>
              Componente
            </th>
            <th>
              Porcentaje
            </th>

            <th>
              kg
            </th>
          </tr>
          <tbody>
            <tr>
              <td>
                Masa Grasa
              </td>
              <td>
                { porcentajeGraso } %
              </td>
              <td>
                {/* Este se saca */}
                { (inputValues.peso * ( porcentajeGraso / 100 )).toFixed(2) }
              </td>
            </tr>

            <tr>
              <td>
                Masa osea
              </td>
              <td>
                
                { ( masaOsea * 100  / inputValues.peso).toFixed(2) } %
              </td>
              <td>
                { masaOsea.toFixed(2) } kg
              </td>
            </tr>

            <tr>
              <td>
                Masa residual
              </td>

              <td>
                
                { masaResidual * 100 / inputValues.peso } %
              </td>

              <td>
                { masaResidual } kg
              </td>
            </tr>

            <tr>
              <td>
                Masa muscular
              </td>
              <td>
                { sumatoriaMasa }
              </td>
              <td>
                { residualResta }
              </td>
            </tr>

          </tbody>
        </table>
      </div> }
    </div>
  )
}

export default Densidad
