'use client'

import { ChartPie } from '@/components/ChartPie'
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

  const calcularDensidad = (inputValues) => {
    const { genero, bicep, tricep, subscapular, supraileaco, femur, bistiloideo, talla, peso } = inputValues;
  
    const sumaPliegues = tricep + bicep + subscapular + supraileaco;
  
    const calcularMasaOsea = () => {
      return Math.pow(Math.pow(talla, 2) * (femur / 100) * (bistiloideo / 100) * 400, 0.712) * 3.02;
    };
  
    const calcularDensidadYResidual = () => {
      const densidadCorporal = genero === 'hombre'
        ? 1.1765 - (0.0744 * Math.log10(sumaPliegues))
        : 1.1567 - (0.0717 * Math.log10(sumaPliegues));
      
      const residual = genero === 'hombre' ? peso * 0.24 : peso * 0.21;
  
      return { densidadCorporal, residual };
    };
  
    const densidadYMasas = () => {
      const { densidadCorporal, residual } = calcularDensidadYResidual();
      setDensidad(densidadCorporal);
      
      //Porcentajes
      const grasa = (495 / densidadCorporal) - 450;
      const porcentajeMasaOsea = calcularMasaOsea() * 100 / peso;
      const porcentajeMasaResidual = residual * 100 / peso;
      const porcentajeMasaMuscular = 100 - (grasa + porcentajeMasaOsea + porcentajeMasaResidual);
      

      //Masas
      const masaGrasaKilos = peso * (grasa / 100);
      const masaMuscularKilos = peso - (masaGrasaKilos + calcularMasaOsea() + residual);
  
      setMasas((prevValues) => ({
        ...prevValues,
        masa_osea: calcularMasaOsea(),
        masa_grasa: masaGrasaKilos,
        masa_muscular: masaMuscularKilos,
        masa_residual: residual,
      }));
  
      setPorcentajes((prevValues) => ({
        ...prevValues,
        masa_osea: porcentajeMasaOsea,
        masa_grasa: grasa,
        masa_muscular: porcentajeMasaMuscular,
        masa_residual: porcentajeMasaResidual,
      }));
    };
  
    densidadYMasas();
  };
  



  return (
    <div className='grid grid-cols-2 gap-x-6 bg-[#003459] items-center justify-center p-8 h-screen'>
      
     
       <FormularioCompCorporal calcularDensidad={calcularDensidad}/>
       

     { densidad && 
      
          <div className='flex flex-col gap-y-4'>
            <ChartPie porcentajes={porcentajes}/>
            <TablaComposicion porcentajes={porcentajes} masas={masas} densidad={densidad}/>
          </div>
        
        
      }
    </div>
  )
}

export default Densidad
