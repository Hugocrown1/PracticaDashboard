import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const ChartPie = ({ percentages }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const { fat_mass, bone_mass, residual_mass, muscular_mass } = percentages;

    const ctx = document.getElementById("myChart");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const newChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Masa grasa", "Masa ósea", "Masa residual", "Masa muscular"],
        datasets: [
          {
            label: "% Porcentaje",
            data: [
              fat_mass.toFixed(2),
              bone_mass.toFixed(2),
              residual_mass.toFixed(2),
              muscular_mass.toFixed(2),
            ],
            backgroundColor: ["#ffecc1", "#96e5ff", "#b8f7e6", "#f3c9d3"],
            borderColor: ["#ffd166", "#118ab2", "#06d6a0", "#ef476f"],
            borderWidth: 1.5,
            hoverOffset: 15,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            font: "bold",
            formatter: (value) => value + "%",
          },
          subtitle: {
            display: true,
            text: "Porcentajes de grasa corporal",
          },
        },
      },
    });

    chartRef.current = newChart;
  }, [percentages]);

  return (
    <div className="relative w-4/6 h-auto rounded-md bg-white flex flex-col p-4 my-auto">
      <h1 className="text-xl font-bold mb-2">Gráfica de pastel</h1>

      <canvas id="myChart"></canvas>
    </div>
  );
};
