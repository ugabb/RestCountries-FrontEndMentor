import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { BsArrowLeft } from "react-icons/bs";

type Props = {};

interface Details {
  name: string;
  capital: string;
  population: string;
  region: string;
  flag: string;
  nativeName: string;
  subregion: string;
  currencies: [];
  borders: [];
  topLevelDomain: [];
  languages: [];
}

const Detail = (props: Props) => {
  const [countries, setCountries] = useState<Details>();

  const baseUrl = "https://restcountries.com/v2";

  async function getCountry(countryName: string | string[] | undefined) {
    try {
      const response = await fetch(`${baseUrl}/name/${countryName}`);
      const data = await response.json();
      setCountries(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();
  const { countryName } = router.query;

  useEffect(() => {
    if (countryName !== undefined) {
      getCountry(countryName);
    } else {
      console.log("ainda nada irmao");
    }
  }, [countryName]);

  console.log(countries);

  if (countries) {
    var {
      name,
      capital,
      population,
      region,
      flag,
      nativeName,
      subregion,
      topLevelDomain,
      currencies,
      borders,
      languages,
    } = countries;
    return (
      <div className="flex flex-col m-5 gap-4 text-white lg:px-10 ">
        <Link href={`/`}>
          <button className="flex gap-2 items-center py-1 px-4 bg-[#2b3945] drop-shadow-lg hover:bg-transparent hover:border-2 hover:border-[#2b3945] ">
            <BsArrowLeft /> Back
          </button>
        </Link>

        <section className="lg:flex lg:h-screen lg:items-center lg:gap-10">
          <img src={flag} className="md:w-2/3 lg:w-1/2 mx-auto" alt="" />
          <aside className="lg:flex lg:flex-col ">
            <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl mb-3 ">{name}</h2>

            <div className="md:flex gap-2 justify-between">
              <div className="mb-10">
                <p className="font-bold md:text-lg">
                  Native Name:{" "}
                  <span className=" font-normal">{nativeName}</span>
                </p>
                <p className="font-bold md:text-lg">
                  Population: <span className=" font-normal">{population}</span>
                </p>
                <p className="font-bold md:text-lg">
                  Region: <span className=" font-normal">{region}</span>
                </p>
                <p className="font-bold md:text-lg">
                  Sub Region: <span className=" font-normal">{subregion}</span>
                </p>
                <p className="font-bold md:text-lg">
                  Capital: <span className=" font-normal">{capital}</span>
                </p>
              </div>

              <div>
                <p className="font-bold md:text-lg">
                  Top Level Domain:{" "}
                  <span className="font-normal">{topLevelDomain}</span>
                </p>
                <p className="font-bold md:text-lg">
                  Currencies:{" "}
                  {currencies &&
                    currencies.map((currencie) => (
                      //@ts-ignore
                      <span className="font-normal">{currencie.name}</span>
                    ))}
                </p>
                <p className="font-bold md:text-lg">
                  Languages:{" "}
                  {languages &&
                    languages.map((language) => (
                      //@ts-ignore
                      <span className=" font-normal">{language.name},</span>
                    ))}
                </p>
              </div>
            </div>

            <div className="md:w-2/3 mx-auto my-4">
              <h2 className="md:text-center font-bold">Border Countries:</h2>

              <div className="flex flex-wrap gap-2 m-2 items-center justify-center drop-shadow-lg">
                {borders &&
                  borders.map((border) => (
                    <p className="bg-[#2b3945] w-20 flex px-2 justify-center">
                      {border}
                    </p>
                  ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    );
  }
};

export default Detail;
