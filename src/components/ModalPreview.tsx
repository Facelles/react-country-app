import type { Country } from "./FetchCountry"; 

interface ModalPreviewProps {
  country: Country;
  onClose: () => void;
}

const ModalPreview = ({ country, onClose }: ModalPreviewProps) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{country.name}</h2>
      <img src={country.flags.png} alt={`${country.name} flag`} />
    </div>
  );
};

export default ModalPreview;
