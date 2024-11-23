/* eslint-disable react/prop-types */
import bannerImg from "../../assets/shareBannerBg.jpg";

const CommonBanner = ({ title, searchBar = false }) => {
  return (
    <div className="relative">
      <div className="absolute z-20 top-0 left-0 w-full h-full bg-black/50"></div>
      <img src={bannerImg} alt="" className="w-full h-80" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
        <h2 className="text-5xl text-white drop-shadow-lg font-bold text-center ">
          {title}
        </h2>
        {searchBar && (
          <div className="flex items-center justify-center gap-4 py-10 w-[70vw] md:w-[50vw]">
            <input
              type="text"
              placeholder="Search for brand"
              className="input input-bordered input-accent w-full"
            />
            <button className="btn btn-accent">Search Brand</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonBanner;
