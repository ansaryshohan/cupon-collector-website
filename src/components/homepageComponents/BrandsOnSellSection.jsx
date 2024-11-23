import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import SingleBrandsCard from "./SingleBrandsCard";

const BrandsOnSellSection = () => {
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    let isLoaded = false;
    const dataFetcher = async () => {
      const result = await fetch("/couponData.json");
      const data = await result.json();
      if (!isLoaded) {
        setBrandsData(data.filter(singleData=> singleData.isSaleOn));
      }
    };
    dataFetcher();
    return () => {
      isLoaded = true;
    };
  }, []);

  return (
    <div className="w-full py-20 bg-gray-100">
      <SectionTitle title={"Brands On Sell"} />
      {/* the brands with coupons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 mx-auto">
      {brandsData.map((singleBrand) => (
        <SingleBrandsCard key={singleBrand._id} singleBrandData={singleBrand} />
      ))}
      </div>
    </div>
  );
};

export default BrandsOnSellSection;
