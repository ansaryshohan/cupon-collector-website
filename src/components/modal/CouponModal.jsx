/* eslint-disable react/prop-types */

// import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../assets/Couponcart-logo-small.png";
import Rating from "../shared/Rating";

const CouponModal = ({ brandData, singleCoupon,copyCouponToClipBoard, setCopyCouponToClipBoard }) => {
  const { brand_name, description, rating, brand_logo, category, shop_Link } =
    brandData;
  const { coupon_code } = singleCoupon;

  return (
    <>
    <dialog id="coupon-modal" className="modal">
      <div className="modal-box max-w-[70vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* logo */}
        <div className=" pt-2 ps-4">
          <img src={logo} alt="" className="w-72 h-28" />
        </div>
        <div className=" divider"></div>
        {/* brand details */}
        <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch pt-2 pb-2 w-10/12 mx-auto ">
          <div className="border p-6">
            <Link to={shop_Link} target="_blank">
              <img src={brand_logo} alt="" className="w-full h-44" />
            </Link>
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
          </div>
        </div>
        <div className=" divider"></div>
        {/* coupon code */}
        <div className="flex items-center justify-center py-2 text-center">
          <CopyToClipboard
            onCopy={() => {
              setCopyCouponToClipBoard({
                ...copyCouponToClipBoard,
                copied: true,
              });
              toast.success(
                `${copyCouponToClipBoard.value} copied to clipboard`
              );
            }}
            text={copyCouponToClipBoard.value}
          >
            <button
              className="border-2 border-accent text-accent px-5 py-2 w-8/12 mx-auto text-3xl font-bold"
              title="Click to Copy"
            >
              {coupon_code}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </dialog>
    </>
    
  );
};

export default CouponModal;
