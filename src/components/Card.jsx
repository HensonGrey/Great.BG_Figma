const Card = ({ image, title, price }) => {
  return (
    <div className="w-24 h-1/3 rounded-lg shadow-md bg-white overflow-hidden flex flex-1 flex-col">
      <img src={image} alt={title} className="w-full h-2/3 object-cover" />
      <div className="p-2 flex-1 flex flex-col justify-between">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        <p className="mt-1 text-lg font-bold text-blue-600">{price}</p>
      </div>
      <button className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold">
        Купи сега
      </button>
    </div>
  );
};

export default Card;
