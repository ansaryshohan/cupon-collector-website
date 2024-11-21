/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdInformationCircle, IoMdPricetags, IoMdTime } from "react-icons/io";
import CouponModal from "../modal/CouponModal";

const SingleCouponCard = ({ singleCoupon, brandData }) => {
  const [showCoupon, setShowCoupon] = useState(false);
  const {
    coupon_code,
    coupon_title,
    description,
    expiry_date,
    condition,
    coupon_type,
  } = singleCoupon;

  const handleCoupon = () => {
    setShowCoupon(true);
    document.getElementById("coupon-modal").showModal();
  };
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch pt-20 pb-10 w-full ">
      {/* coupon image */}
      <div className="border p-6 px-16 flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="text-orange-500 text-4xl font-bold text-center uppercase">
          {coupon_title}
        </h3>
        <p className="text-orange-500/80 text-lg font-semibold text-center">
          Limited Offer
        </p>
      </div>
      {/* coupon details */}
      <div className=" space-y-5 border pb-8">
        {/* upper details div */}
        <div className=" px-12  pt-12 pb-4 flex gap-8 items-center justify-center">
          <p className="flex items-center gap-1 py-0 my-0 ">
            <IoMdTime />
            <span className="font-medium">expiry date : </span> {expiry_date}
          </p>
          <p className="flex items-center gap-1 py-0 my-0 ">
            <IoMdPricetags />
            <span className="font-medium"> {coupon_type} </span>
          </p>
          <p
            className="flex items-center gap-1 py-0 my-0 tooltip  tooltip-accent"
            data-tip={condition}
          >
            <IoMdInformationCircle />
            <span className="font-medium"> condition </span>
          </p>
        </div>
        <div className="divider mt-0"></div>
        {/* description */}
        <p className=" my-2 px-12 text-xl font-medium">{description}</p>
        {/* coupon code div */}
        <div className="px-12">
          {showCoupon ? (
            <button className="px-8 py-2 text-xl font-bold border-2 border-accent rounded-xl text-accent">
              {coupon_code}
            </button>
          ) : (
            <button
              className="px-8 py-2 text-xl font-bold bg-accent rounded-xl text-white"
              onClick={handleCoupon}
            >
              Show Coupon Code
            </button>
          )}
        </div>
      </div>
    </div>
    <CouponModal brandData={brandData} singleCoupon={singleCoupon}/>
    </>
  );
};

export default SingleCouponCard;