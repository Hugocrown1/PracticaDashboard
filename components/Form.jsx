import React, { useState } from "react";

export const Form = ({ calculateDensity }) => {
  const [inputValues, setInputValues] = useState({
    gender: "",
    weight: "",
    size: "",
    age: "",
    bicep: "",
    tricep: "",
    subscapular: "",
    suprailiac: "",
    femur: "",
    bistyloid: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    let parsedValue = value;

    if (type === "number" && value !== "") {
      parsedValue = parseFloat(value);
    }

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    calculateDensity(inputValues);
  };

  return (
    <div className="bg-[#ffff] text-black rounded-md w-full h-fit mx-auto px-6 py-4 shadow-lg">
      <h1 className="text-xl font-bold mb-5">Composición corporal</h1>

      <form onSubmit={handleSubmit}>
        {/* Datos personales */}
        <h2 className="font-medium text-gray-500 mb-2">Datos Personales</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 font-bold">
          <div className="flex flex-col">
            <h2>Genero</h2>

            <div className="flex gap-x-6 justify-center items-center pt-2">
              <div className="flex flex-row space-x-2">
                <label className="font-normal" htmlFor="genero-hombre">
                  Masculino
                </label>
                <input
                  className="form-input "
                  type="radio"
                  name="gender"
                  value="hombre"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-row space-x-2">
                <label className="font-normal" htmlFor="genero-mujer">
                  Femenino
                </label>
                <input
                  className="form-input "
                  type="radio"
                  name="gender"
                  value="mujer"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="peso">Peso</label>
            <input
              className="form-input"
              type="number"
              name="weight"
              value={inputValues.weight}
              placeholder="Ingrese su peso"
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">kg</span>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="talla">Talla</label>
            <input
              className="form-input"
              type="number"
              name="size"
              value={inputValues.size}
              placeholder="Ingrese su talla"
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">m</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="edad">Edad</label>
            <input
              className="form-input"
              type="number"
              name="age"
              value={inputValues.age}
              placeholder="Ingrese su edad"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        <h2 className="font-medium text-gray-500 mb-2">Pliegues</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 font-bold">
          <div className="flex flex-col relative">
            <label htmlFor="bicep">Bicipital</label>
            <input
              className="form-input"
              type="number"
              name="bicep"
              value={inputValues.bicep}
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">mm</span>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="tricep">Tricipital</label>
            <input
              className="form-input"
              type="number"
              name="tricep"
              value={inputValues.tricep}
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">mm</span>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="subscapular">Subscapular</label>
            <input
              className="form-input"
              type="number"
              name="subscapular"
              value={inputValues.subscapular}
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">mm</span>
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="supraileaco">Supraileaco</label>
            <input
              className="form-input"
              type="number"
              name="suprailiac"
              value={inputValues.suprailiac}
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">mm</span>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="femur">Femur</label>
            <input
              className="form-input"
              type="number"
              name="femur"
              value={inputValues.femur}
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">cm</span>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="bistiloideo">Biestiloideo</label>
            <input
              className="form-input"
              type="number"
              name="bistyloid"
              value={inputValues.bistyloid}
              required
              onChange={handleInputChange}
            />
            <span className="input-extent">cm</span>
          </div>
        </div>

        <button
          className="mt-4 p-2 bg-[#00b4d8] text-black rounded-md"
          type="submit"
        >
          Calcular
        </button>
      </form>
    </div>
  );
};
