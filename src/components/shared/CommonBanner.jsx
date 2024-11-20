/* eslint-disable react/prop-types */
import bannerImg from "../../assets/shareBannerBg.jpg";

const CommonBanner = ({title}) => {
  return (
    <div className="relative">
      <div className="absolute z-20 top-0 left-0 w-full h-full bg-black/50"></div>
      <img src={bannerImg} alt="" className="w-full h-80" />
      <h2 className="text-5xl text-white drop-shadow-lg font-bold text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
        {title}
      </h2>
    </div>
  )
}

export default CommonBanner
