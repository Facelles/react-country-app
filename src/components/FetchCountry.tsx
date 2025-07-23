import React, { useState, useEffect } from "react";

interface FetchCountryProps {
    searchQuery: string;
    region: string;
}

interface Country {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  alpha2Code: string;
  alpha3Code: string;
  timezones: string[];
  numericCode: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
  };
}

const FetchCountry: React.FC<FetchCountryProps> = ({ searchQuery, region }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  const filtred = countries
    .filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((country) => 
        region ? country.region === region : true
    )
    .slice(0, 8)

return (
    <div className="p-6">
        <div className="flex flex-wrap justify-start gap-6">
        {filtred.map((country) => (
            <div
            key={country.name}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white dark:bg-gray-800 rounded shadow p-4"
            >
            <img
                src={country.flags.png}
                alt={country.name}
                className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="font-semibold text-lg mb-2">{country.name}</h2>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            </div>
        ))}
        </div>
    </div>
    );
};

export default FetchCountry;
