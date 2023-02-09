import { useState, useEffect } from "react";
import Search from "@/components/Search";
import CountryCard from "@/components/CountryCard";
import FilterRegion from "@/components/FilterRegion";

type Country = {
  name: string;
  capital: string;
  population: string;
  region: string;
  numericCode: number;
  flag: string;
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [contryName, setContryName] = useState<string>("");
  const [regionName, setRegionName] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<any>("");
  const [contryFilter, setContryFilter] = useState<any>("");

  const baseUrl = "https://restcountries.com/v2";

  async function getCountries() {
    try {
      const response = await fetch(`${baseUrl}/all`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  const filter = async (
    contryName: string,
    region: string,
    countries: any[]
  ) => {
    if (contryName !== "") {
      const results = countries.filter((country, i) => {
        return country.name.toLowerCase().startsWith(contryName.toLowerCase());
      });
      setContryFilter(results);
    } else if (region !== "") {
      const results = countries.filter((country, i) => {
        return country.region.toLowerCase().startsWith(region.toLowerCase());
      });
      setRegionFilter(results);
    } else{
      setContryFilter("");
      setRegionFilter("");
    }
  };

  useEffect(() => {
    filter(contryName, regionName, countries);
  }, [contryName, regionName, countries]);

  // const getByCountryName = async (country: string) => {
  //   try {
  //     const response = await fetch(`${baseUrl}/name/${country}`);
  //     const data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  return (
    <>
      <Search setContryName={setContryName} />
      <FilterRegion setRegionName={setRegionName} />

      {contryFilter !== "" ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 md:m-5">
          {contryFilter &&
            contryFilter.map((country: any) => {
              const { numericCode, name, population, flag, region, capital } =
                country;
              return (
                <article key={numericCode}>
                  <CountryCard
                    flag={flag}
                    country={name}
                    population={population}
                    region={region}
                    capital={capital}
                  />
                </article>
              );
            })}
        </div>
      ) : regionFilter !== "" ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 md:m-5">
          {regionFilter &&
            regionFilter.map((country: any) => {
              const { numericCode, name, population, flag, region, capital } =
                country;
              return (
                <article key={numericCode}>
                  <CountryCard
                    flag={flag}
                    country={name}
                    population={population}
                    region={region}
                    capital={capital}
                  />
                </article>
              );
            })}
        </div>
      ) : (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 md:m-5">
          {countries &&
            countries.map((country: any) => {
              const { numericCode, name, population, flag, region, capital } =
                country;
              return (
                <article key={numericCode}>
                  <CountryCard
                    flag={flag}
                    country={name}
                    population={population}
                    region={region}
                    capital={capital}
                  />
                </article>
              );
            })}
        </div>
      )}
    </>
  );
}
