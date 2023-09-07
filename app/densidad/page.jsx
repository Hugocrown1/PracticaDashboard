"use client";

import { ChartPie } from "@/components/ChartPie";
import { Form } from "@/components/Form";
import { Table } from "@/components/Table";

import React, { useEffect, useState } from "react";

export const Density = () => {
  const [density, setDensity] = useState();

  const [showResults, setShowResults] = useState(false);

  const [percentages, setPercentages] = useState({});

  const [masses, setMasses] = useState({});

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userFormData"));

    if (!userData) {
      return;
    }

    setMasses(userData.user_masses);
    setPercentages(userData.user_percentages);
    setDensity(userData.user_density);
    setShowResults(true);
  }, []);

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
        gender === "male"
          ? 1.1765 - 0.0744 * Math.log10(foldsSum)
          : 1.1567 - 0.0717 * Math.log10(foldsSum);

      const residual = gender === "male" ? weight * 0.24 : weight * 0.21;

      return { bodyDensity, residual };
    };

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

    const calculatedMasses = {
      bone_mass: calculateBoneMass(),
      fat_mass: fatMassKilos,
      muscular_mass: muscularMassKilos,
      residual_mass: residual,
    };
    setMasses(calculatedMasses);

    const calculatedPercentages = {
      bone_mass: boneMassPercentage,
      fat_mass: fat,
      muscular_mass: muscularMassPercentage,
      residual_mass: residualMassPercentage,
    };
    setPercentages(calculatedPercentages);

    window.localStorage.setItem(
      "userFormData",
      JSON.stringify({
        user_masses: { ...calculatedMasses },
        user_percentages: { ...calculatedPercentages },
        user_density: bodyDensity,
      })
    );

    setShowResults(true);
  };

  const resetResults = () => {
    setMasses({});
    setPercentages({});
    setDensity(0);

    setShowResults(false);
  };

  return (
    <div className="grid grid-cols-1 gap-x-6 bg-[#76e8ff] items-center justify-center p-8 h-screen lg:grid-cols-2">
      <Form calculateDensity={calculateDensity} resetResults={resetResults} />

      {showResults && (
        <div className="flex flex-row gap-y-2 p-4 justify-between  bg-[#f9fcff] rounded-md">
          <Table percentages={percentages} masses={masses} density={density} />
          <ChartPie percentages={percentages} />
        </div>
      )}
    </div>
  );
};

export default Density;
