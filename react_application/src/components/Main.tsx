import React, { useEffect, useState } from "react";
import CheckField from "./CheckField";
import PopulationData from "./PopulationData";
import axios from "axios";

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "10px",
  },
  label: {
    fontSize: "20px",
    padding: "0.5rem 2rem",
    borderLeft: "4px solid #000",
    marginLeft: "10pt",
  },
  selected: {
    fontWeight: "bold",
    color: "#0000FF",
  },
};

const Main: React.FC = () => {
  const [prefectures, setPrefectures] = useState<{
    message: null;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  } | null>(null);
  const [selectedPref, setSelectedPref] = useState<string | null>(null);
  const [populationData, setPopulationData] = useState<{
    year: number;
    value: number;
  }[]>([]);

  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
      })
      .then((results) => {
        setPrefectures(results.data);
      })
      .catch((error) => {});
  }, []);


  const handleItemClick = (prefCode: number) => {
    const prefCodeNum = prefCode; 
    console.log(prefCodeNum);
    axios
      .get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCodeNum}`, //use str
        {
          headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
        }
      )
      .then((response) => {
        console.log(response);
        setPopulationData(response.data.result.data[0].data);
      })
      .catch((error) => {
        console.error("Error fetching population data:", error);
      });
  };
  
  return (
    <main>
      {prefectures && (
        <CheckField
          prefectures={prefectures.result}
          onClickCode={handleItemClick}
          selectedPref={selectedPref}
          styles={Styles}
        />
      )}
      {populationData.length > 0 && (
        <PopulationData populationData={populationData} />  //table
      )}
    </main>
  );
};

export default Main;
