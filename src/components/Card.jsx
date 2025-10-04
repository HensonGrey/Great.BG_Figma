const Card = ({ image, title, price }) => {
  return (
    <div className="w-full max-w-[300px] rounded-lg flex flex-col">
      <img src={image} alt={title} className="w-full h-2/3 object-cover" />
      <div className="p-2 flex-1 flex flex-col justify-between gap-3">
        <p className="font-nexa font-extrabold text-2xl leading-[32px] tracking-[0%] text-[#232323] capitalize">
          {title}
        </p>
        <p className="font-jost text-lg leading-[26px] tracking-[0%] #232323">
          {price}
        </p>
      </div>
      <button
        className="bg-[#7B0AD1] rounded-lg px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out 
                           hover:bg-[#8C14E0] hover:scale-105 hover:shadow-lg"
      >
        <p className="font-inter font-medium text-lg leading-[24px] tracking-[0%] text-[#FFFFFF] capitalize">
          Купи Сега
        </p>
      </button>
    </div>
  );
};

export default Card;
