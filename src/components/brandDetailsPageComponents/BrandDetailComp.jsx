/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";
import Rating from "../shared/Rating";

const BrandDetailComp = ({brandData}) => {
  const { brand_name, description, rating, brand_logo, coupons, category,shop_Link } =
    brandData;
  return (
    <div className="flex flex-col md:flex-row justify-stretch gap-6 items-stretch pt-10 pb-10 w-10/12 mx-auto ">
        <div className="border p-6">
          <Link to={shop_Link} target="_blank"><img src={brand_logo} alt="" className="w-full h-44" /></Link>
        </div>
        <div className="border p-6">
          <h2 className="text-2xl font-semibold">{brand_name}</h2>
          <p className=" my-2">{description}</p>
          <p className="flex items-center gap-2 py-0 my-0 ">
          <span className="font-medium">category : </span> {category}{" "}
        </p>
        <div className="flex items-center gap-2 py-0 my-0">
          <span className="font-medium">Rating : </span>{" "}
          <Rating starCount={rating} />{" "}
        </div>
        <p className="flex items-center gap-2 py-0 my-0 font-medium mt-3">
          <span className="font-medium">Coupons Available : </span> {coupons.length}
        </p>
        </div>

      </div>
  )
}

export default BrandDetailComp