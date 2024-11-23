import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";

const BrandsMarqueeSection = () => {
  const [brandImgData, setBrandImgData] = useState([]);

  useEffect(() => {
    let isLoaded = false;
    const dataFetcher = async () => {
      const result = await fetch("/couponData.json");
      const data = await result.json();
      if (!isLoaded) {
        setBrandImgData(data.map((resultData) => {return{id:resultData._id,image:resultData.brand_logo}}));
      }
    };
    dataFetcher();
    return () => {
      isLoaded = true;
    };
  }, []);

  return (
    <div className="py-20 w-full ">
      <SectionTitle title={"Top Brands"} />
      <div className="md:w-10/12 md:mx-auto">
      <Marquee pauseOnHover={true} speed={80}>
        {brandImgData.map((singleImg) => (
          <div key={singleImg.id} className="mx-4 cursor-pointer">
            <Link to={`/brand/${singleImg.id}`}>
              <img
                src={singleImg.image}
                alt=""
                className="w-32 h-20 object-cover rounded-xl"
              />
            </Link>
          </div>
        ))}
      </Marquee>
      </div>
    </div>
  );
};

export default BrandsMarqueeSection;
