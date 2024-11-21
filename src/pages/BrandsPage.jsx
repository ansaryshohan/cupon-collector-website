import { useLoaderData } from "react-router-dom";
import CommonBanner from "../components/shared/CommonBanner";
import SingleBrandComponent from "../components/BrandPageComponents/SingleBrandComponent";

const BrandsPage = () => {
  const couponData= useLoaderData();
  return (
    <div className="w-full">
      <CommonBanner title={"All Brands"}/>
      <div className="w-10/12 mx-auto py-16">
      {
          couponData.map(singleBrand=><SingleBrandComponent key={singleBrand._id} brandData={singleBrand}/>)
      }
      </div>
    </div>
  );
};

export default BrandsPage;
