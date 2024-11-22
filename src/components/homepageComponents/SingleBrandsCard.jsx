/* eslint-disable react/prop-types */

import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../shared/Rating";

const SingleBrandsCard = ({ singleBrandData }) => {
  const { _id, brand_name, rating, brand_logo, coupons, category } =
    singleBrandData;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-2 pt-8">
        <img
          src={brand_logo}
          alt={brand_name}
          className="rounded-xl w-full h-36 object-cover"
        />
      </figure>
      <div className="card-body p-4 ps-6">
        <h2 className="text-2xl font-semibold text-start">{brand_name}</h2>
        <p className="flex items-center gap-2 py-0 my-0 ">
          <span className="font-medium">category : </span> {category}{" "}
        </p>
        <div className="flex items-center gap-2 py-0 my-0">
          <span className="font-medium">Rating : </span>{" "}
          <Rating starCount={rating} />{" "}
        </div>

        <div className="divider my-0"></div>
        <div className="flex justify-between items-center">
          {/* coupon div */}
          <div className="flex justify-start items-center gap-1">
            <MdDiscount className="text-primary-color text-base" />{" "}
            <span className="text-base font-medium">Coupons : </span>{" "}
            <span className="text-base font-bold text-secondary-color">
              {coupons.length}
            </span>
          </div>
          {/* action button div */}
          <div className=" pr-2">
            {" "}
            <Link to={`/brand/${_id}`}>
              <FaArrowAltCircleRight className="text-xl text-secondary-color hover:text-primary-color" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandsCard;
