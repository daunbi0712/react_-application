import React from "react";

type PopulationDataProps = {
  populationData: { year: number; value: number }[]; 
};

const PopulationData: React.FC<PopulationDataProps> = ({ populationData }) => { 
  return (
    <div>
      <h2>Population Data</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {populationData.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopulationData;
