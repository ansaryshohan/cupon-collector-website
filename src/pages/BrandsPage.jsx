import { useLoaderData } from "react-router-dom";
import CommonBanner from "../components/shared/CommonBanner";
import SingleBrandComponent from "../components/brandPageComponents/SingleBrandComponent";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const BrandsPage = () => {
  const couponData= useLoaderData();
  return (
    <div className="w-full">  
        <PageTitleWithHelmet title={"Brands"}/>

      <CommonBanner title={"All Brands"} searchBar={true}/>
      <div className="w-10/12 mx-auto py-16">
      {
          couponData.map(singleBrand=><SingleBrandComponent key={singleBrand._id} brandData={singleBrand}/>)
      }
      </div>
    </div>
  );
};

export default BrandsPage;
