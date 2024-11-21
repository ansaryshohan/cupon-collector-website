/* eslint-disable react/prop-types */
// import React from 'react'

import SectionTitle from "../shared/SectionTitle";
import SingleBrandCoupon from "./SingleBrandCoupon";

const SingleBrandComponent = ({ brandData }) => {
  const { brand_name, coupons } = brandData;
  return (
    <div className=" py-10">
      <SectionTitle title={brand_name} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((coupon, idx) => (
          <SingleBrandCoupon key={idx} couponData={coupon} />
        ))}
      </div>
    </div>
  );
};

export default SingleBrandComponent;
