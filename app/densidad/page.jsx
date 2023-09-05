"use client";

import { ChartPie } from "@/components/ChartPie";
import { Form } from "@/components/Form";
import { Table } from "@/components/Table";

import React, { useState } from "react";

export const Density = () => {
  const [density, setDensity] = useState(null);

  const [percentages, setPercentages] = useState({
    bone_mass: null,
    fat_mass: null,
    residual_mass: null,
    muscular_mass: null,
  });

  const [masses, setMasses] = useState({
    bone_mass: null,
    fat_mass: null,
    residual_mass: null,
    muscular_mass: null,
  });

  const calculateDensity = (inputValues) => {
    const {
      gender,
      bicep,
      tricep,
      subscapular,
      suprailiac,
      femur,
      bistyloid,
      size,
      weight,
    } = inputValues;

    const foldsSum = tricep + bicep + subscapular + suprailiac;

    const calculateBoneMass = () => {
      return (
        Math.pow(
          Math.pow(size, 2) * (femur / 100) * (bistyloid / 100) * 400,
          0.712
        ) * 3.02
      );
    };

    const calculateDensityAndResidual = () => {
      const bodyDensity =
        gender === "hombre"
          ? 1.1765 - 0.0744 * Math.log10(foldsSum)
          : 1.1567 - 0.0717 * Math.log10(foldsSum);

      const residual = gender === "hombre" ? weight * 0.24 : weight * 0.21;

      return { bodyDensity, residual };
    };

    const densityAndMass = () => {
      const { bodyDensity, residual } = calculateDensityAndResidual();
      setDensity(bodyDensity);

      //percentage
      const fat = 495 / bodyDensity - 450;
      const boneMassPercentage = (calculateBoneMass() * 100) / weight;
      const residualMassPercentage = (residual * 100) / weight;
      const muscularMassPercentage =
        100 - (fat + boneMassPercentage + residualMassPercentage);

      //masses
      const fatMassKilos = weight * (fat / 100);
      const muscularMassKilos =
        weight - (fatMassKilos + calculateBoneMass() + residual);

      setMasses((prevValues) => ({
        ...prevValues,
        bone_mass: calculateBoneMass(),
        fat_mass: fatMassKilos,
        muscular_mass: muscularMassKilos,
        residual_mass: residual,
      }));

      setPercentages((prevValues) => ({
        ...prevValues,
        bone_mass: boneMassPercentage,
        fat_mass: fat,
        muscular_mass: muscularMassPercentage,
        residual_mass: residualMassPercentage,
      }));
    };

    densityAndMass();
  };

  return (
    <div className="grid grid-cols-2 gap-x-6 bg-[#003459] items-center justify-center p-8 h-screen">
      <Form calculateDensity={calculateDensity} />

      {density && (
        <div className="flex flex-col gap-y-4">
          <ChartPie percentages={percentages} />
          <Table percentages={percentages} masses={masses} density={density} />
        </div>
      )}
    </div>
  );
};

export default Density;
