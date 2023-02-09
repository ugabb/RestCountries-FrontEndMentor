import React, { useState } from "react";

type Props = {};

const FilterRegion = (props: Props) => {
    const [region, setRegion] = useState("");

  return (
    <div className="py-4 bg-[#2b3945] w-1/2 ml-5 flex items-center justify-center rounded-lg mb-5">
      <select name="" id="" className="bg-[#2b3945] text-white">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterRegion;
