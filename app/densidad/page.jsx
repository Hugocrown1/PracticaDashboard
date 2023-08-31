'use client'

import { FormularioCompCorporal } from '@/components/FormularioCompCorporal'
import { TablaComposicion } from '@/components/TablaComposicion'
import React, { useState } from 'react'

export const Densidad = () => {


  const [densidad, setDensidad] = useState(null)

  const [porcentajes, setPorcentajes] = useState({
    masa_osea: null,
    masa_grasa: null,
    masa_residual: null,
    masa_muscular: null
  })

  const [masas, setMasas] = useState({
      masa_osea: null,
      masa_grasa: null,
      masa_residual: null,
      masa_muscular: null
    
  })

 
  const calcularDensidad = ( inputValues ) => {

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

    const porcentajeMasaMuscular = 100 - (grasa + porcentajeMasaOsea + porcentajeMasaResidual)
    setPorcentajes((prevValues) => ({
      ...prevValues,
      masa_muscular: porcentajeMasaMuscular
    }))

    const masaMuscularKilos =  peso - ( masaGrasaKilos + osea + residual ) 
    setMasas((prevValues) => ({
      ...prevValues,
      masa_muscular: masaMuscularKilos
    }))

    
    
  }


  return (
    <div className='grid grid-cols-2 gap-x-6 bg-[#003459] items-center justify-center p-8 h-screen'>
      
     <FormularioCompCorporal calcularDensidad={calcularDensidad}/>


     { densidad &&  <TablaComposicion porcentajes={porcentajes} masas={masas} densidad={densidad}/> }
    </div>
  )
}

export default Densidad
