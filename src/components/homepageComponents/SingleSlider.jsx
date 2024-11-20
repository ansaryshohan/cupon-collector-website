/* eslint-disable react/prop-types */

const SingleSlider = ({ singleBanner }) => {
  return (
    <div className="w-full relative">
      <div className="absolute w-full h-[550px] top-0 left-0 bg-gradient-to-r from-black/50  to-black/0 z-10"></div>
      <img
        src={singleBanner.image}
        alt=""
        className="w-full h-[550px] object-cover"
      />
      {singleBanner.title ? (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center backdrop-blur-2xl bg-white/60 w-9/12  px-10 py-20 rounded-2xl">
          <h1 className="text-6xl font-bold text-primary-color mb-5">{singleBanner.title}</h1>
          <p className="text-xl font-medium text-secondary-color">{singleBanner.subTitle}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleSlider;
