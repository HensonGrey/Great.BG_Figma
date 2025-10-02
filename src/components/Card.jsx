const Card = ({ image, title, price }) => {
  return (
    <div className="w-64 rounded-lg shadow-md bg-white overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-xl font-bold text-blue-600">{price}</p>
      </div>
      <button>
        <p>Купи сега</p>
      </button>
    </div>
  );
};

export default Card;
