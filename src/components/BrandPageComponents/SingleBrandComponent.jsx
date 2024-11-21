/* eslint-disable react/prop-types */
// import React from 'react'

import BrandDetailComp from "../brandDetailsPageComponents/BrandDetailComp";
import SectionTitle from "../shared/SectionTitle";
import SingleBrandCoupon from "./SingleBrandCoupon";

const SingleBrandComponent = ({ brandData }) => {
  const { brand_name, coupons } = brandData;
  return (
    <div className=" py-10">
      <SectionTitle title={brand_name} />
      
      <div className=" border pb-6 rounded-xl ">
      <BrandDetailComp brandData={brandData} />
      <div className="divider w-10/12 mx-auto before:bg-sky-200 after:bg-sky-200"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
        {coupons.map((coupon, idx) => (
          <SingleBrandCoupon key={idx} couponData={coupon} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default SingleBrandComponent;
