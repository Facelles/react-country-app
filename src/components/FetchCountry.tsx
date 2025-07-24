import React, { useState, useEffect } from "react";

interface FetchCountryProps {
    searchQuery: string;
    region: string;
    darkMode: boolean;
    onSelectCountry?: (country: Country) => void;
}

export interface Country {
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

const FetchCountry: React.FC<FetchCountryProps> = ({ searchQuery, region, darkMode, onSelectCountry}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  const filtred = countries
      .filter((country) =>
        searchQuery.trim() === "" ||
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    .filter((country) => 
        region ? country.region === region : true
    )
    .slice(0, 8)

return (
    <div className='p-6' key={darkMode ? "dark" : "light"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filtred.map((country) => (
          <div
            key={country.name}
            onClick={() => onSelectCountry&&onSelectCountry(country)}
             style={{ backgroundColor: darkMode ? '#2a3742' : 'white' }}
             className="rounded shadow p-4"          >
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
