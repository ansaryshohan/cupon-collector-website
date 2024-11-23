/* eslint-disable react/prop-types */
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoMdInformationCircle, IoMdPricetags, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
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

  const [copyCouponToClipBoard, setCopyCouponToClipBoard] = useState({
    value: coupon_code,
    copied: false,
  });

  // modal open and coupon toggle
  const handleCoupon = () => {
    setShowCoupon(true);
    document.getElementById("coupon-modal").showModal();
  };

  // coupon code copy in clipboard
  const handleCouponOnCopy = () => {
    setCopyCouponToClipBoard({
      ...copyCouponToClipBoard,
      copied: true,
    });
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center gap-6 items-stretch pt-20 pb-10 w-full "
        data-aos="flip-up"
        data-aos-easing="ease-out"
        data-aos-duration="1200"
      >
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
          <div className="px-12 flex justify-start items-start">
            {showCoupon ? (
              // coupon copy to clipboard button
              <div className="flex flex-col gap-1">
                <CopyToClipboard
                  onCopy={handleCouponOnCopy}
                  text={copyCouponToClipBoard.value}
                >
                  <div className="inline">
                    <button
                      className="px-8 py-2 text-xl font-bold border-2 border-accent rounded-xl text-accent"
                      title="click to copy"
                    >
                      {coupon_code}
                    </button>
                  </div>
                </CopyToClipboard>

                {copyCouponToClipBoard.copied ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Copied in clipboard.
                  </span>
                ) : null}
              </div>
            ) : (
              <button
                className="px-8 py-2 text-xl font-bold border border-accent rounded-xl text-accent"
                onClick={handleCoupon}
              >
                Show Coupon Code
              </button>
            )}
            <Link to={brandData.shop_Link} target="_blank" className="ml-4">
              <button className="px-8 py-2 text-xl font-bold bg-accent rounded-xl text-white">
                Use Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CouponModal
        brandData={brandData}
        singleCoupon={singleCoupon}
        copyCouponToClipBoard={copyCouponToClipBoard}
        setCopyCouponToClipBoard={setCopyCouponToClipBoard}
      />
    </>
  );
};

export default SingleCouponCard;
