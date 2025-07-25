import type { Country } from "./FetchCountry"; 

interface ModalPreviewProps {
  country: Country;
  onClose: () => void;
}

const ModalPreview = ({ country, onClose }: ModalPreviewProps) => {
  return (
    <div className='absolute top-16 left-0 w-full max-w-none h-[calc(100vh-1rem)] bg-white z-50 p-8 overflow-y-auto'>
      <button onClick={onClose} className='mb-8 bg-white shadow px-6 py-2 rounded font-medium absolute left-4'> ← Back </button>



      <div className="grid grid-cols-2 gap-16 items-start absolute top-22">
        <div>
          <img src={country.flags.png}
          alt={country.name}
          className="w-full max-w-[200px] object-contain rounded shadow" />
       </div>
      </div>

    </div>
  );
};

export default ModalPreview;
