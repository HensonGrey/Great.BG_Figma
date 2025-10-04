const FakeReview = ({
  title,
  review,
  posterPicture,
  posterName,
  posterRole,
}) => {
  return (
    <div className="bg-white rounded-3xl px-8 py-10 border border-[#7B0AD1] shadow-[0px_6px_16.8px_0px_#080F340A] flex flex-col justify-between overflow-hidden h-[460px]">
      {/* Profile picture - top center on mobile, hidden on lg */}
      <div className="flex justify-center mb-6 lg:hidden">
        <img
          src={posterPicture}
          alt="Profile"
          className="h-20 w-20 rounded-full bg-[#C3B2E7]"
        />
      </div>

      <div className="mb-6 flex flex-col">
        <h2 className="font-nexa font-extrabold text-3xl leading-[33px] text-[#170F49] mb-5 text-center lg:text-left">
          {title}
        </h2>
        <p className="font-inter text-xl leading-[28px] text-[#5F6D7E] mb-6 text-center lg:text-left">
          {review}
        </p>
      </div>

      {/* Profile picture + info - normal position on lg */}
      <div className="hidden lg:flex gap-4 items-center mt-auto">
        <img
          src={posterPicture}
          alt="Profile"
          className="h-16 w-16 rounded-full bg-[#C3B2E7]"
        />
        <div className="flex flex-col gap-1">
          <p className="font-inter font-bold text-xl text-[#170F49]">
            {posterName}
          </p>
          <p className="font-inter text-lg text-[#6F6C90]">{posterRole}</p>
        </div>
      </div>

      {/* Mobile name/role under top picture */}
      <div className="flex flex-col gap-1 items-center lg:hidden">
        <p className="font-inter font-bold text-xl text-[#170F49]">
          {posterName}
        </p>
        <p className="font-inter text-lg text-[#6F6C90]">{posterRole}</p>
      </div>
    </div>
  );
};

export default FakeReview;
