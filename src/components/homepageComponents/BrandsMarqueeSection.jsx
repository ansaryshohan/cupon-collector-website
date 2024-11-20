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
        setBrandImgData(data.map((resultData) => resultData.brand_logo));
      }
    };
    dataFetcher();
    return () => {
      isLoaded = true;
    };
  }, []);

  return (
    <div className="py-20 w-full">
      <SectionTitle title={"Top Brands"} />
      <Marquee pauseOnHover={true} speed={80}>
        {brandImgData.map((singleImg, idx) => (
          <div key={idx} className="mx-4 cursor-pointer">
            <Link to={"/brands"}>
              <img
                src={singleImg}
                alt=""
                className="w-32 h-20 object-cover rounded-xl"
              />
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandsMarqueeSection;
