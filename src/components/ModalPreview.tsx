import { Code } from "@mui/icons-material";
import type { Country } from "./FetchCountry"; 

interface ModalPreviewProps {
  country: Country;
  onClose: () => void;
}

const ModalPreview = ({ country, onClose }: ModalPreviewProps) => {
  return (
    <div className='absolute top-16 left-0 w-full h-[calc(100vh-1rem)] bg-white z-50 p-8 overflow-y-auto'>
      <button onClick={onClose} className='mb-8 bg-white shadow px-6 py-2 rounded font-medium absolute left-15'> ← Back </button>



      <div className="grid grid-cols-2 gap-16 items-start absolute top-45 left-15">

        <div>

          <img src={country.flags.png}
          alt={country.name}
          className="w-xl object-contain rounded shadow" />

       </div>

        <div className="grid-cols-2 gap-20 items-start">
          <h1 className="text-left ">
              {country.name}
          </h1>
          <br />
          <div className="flex gap-16">

            <div className="flex flex-col gap-2">
              <p className="text-left pb-2">Native Name:   {country.nativeName} </p>
              <p className="text-left pb-2">Population:    {country.population} </p>
              <p className="text-left pb-2">Region:            {country.region} </p>
              <p className="text-left pb-2">Sub Region:     {country.subregion} </p>
              <p className="text-left pb-2">Capital:          {country.capital} </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-left pb-2">Top Level Domain:  {country.topLevelDomain} </p>
              <p className="text-left pb-2">Currencies:{" "}
                            {country.currencies.map((c) => `${c.name} (${c.code}) ${c.symbol}`).join(", ")}
              </p>
              <p className="text-left pb-2" >Languages:        {" "} 
                            {country.languages
                            .map((lang) => `${lang.name} (${lang.nativeName})`)
                            .join(", ")
                            }
              </p>
            </div>

          </div>
          <br /><br />
              <ul className="text-left">
                <li>Border Countries: {country.borders[0]} {country.borders[1]} {country.borders[2]} </li>
              </ul>
          <div>


          </div>
        </div>

      </div>

    </div>
  );
};

export default ModalPreview;
