import React from "react";

import Link from "next/link";

type Props = {
  flag: string;
  country: string;
  population: string;
  region: string;
  capital: string;
};

const CountryCard = ({ flag, country, population, region, capital }: Props) => {
  return (
    <div className="w-3/4  md:w-full  mx-auto mb-10  rounded-lg bg-[#2b3945] h-[350px] drop-shadow-lg">
      <Link href="/Detail">
        <img
          className="h-1/2 w-full rounded-t-lg object-cover"
          src={flag}
          alt=""
        />
        <div className="flex flex-col h-1/2 p-5 gap-3">
          <p className="text-xl font-bold text-white">{country}</p>
          <div className="flex flex-col">
            <p className=" text-white">
              Population: <span className="text-[#fafafa]">{population}</span>
            </p>
            <p className=" text-white">
              Region: <span className="text-[#fafafa]"> {region}</span>
            </p>
            <p className=" text-white">
              Capital: <span className="text-[#fafafa]"> {capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
