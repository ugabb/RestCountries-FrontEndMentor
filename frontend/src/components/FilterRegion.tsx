import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  setRegionName: Function;
};

interface IFormRegion {
  region: string;
}

const FilterRegion = ({setRegionName}: Props) => {
    const [region, setRegion] = useState("");

    const {register, handleSubmit} = useForm<IFormRegion>();
    const onSubmit: SubmitHandler<IFormRegion> = data => {
      setRegionName(data.region)
    }


  return (
    <form onChange={handleSubmit(onSubmit)} className="py-4 bg-[#2b3945] w-1/2 ml-5 flex items-center justify-center rounded-lg mb-5">
      <select {...register("region")} className="bg-[#2b3945] text-white">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default FilterRegion;
