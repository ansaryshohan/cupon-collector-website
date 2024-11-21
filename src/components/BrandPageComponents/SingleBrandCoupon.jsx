/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleBrandCoupon = ({couponData}) => {
  const {
    coupon_code,
    coupon_title,
    description,
    expiry_date,
  }= couponData;
  return (
    <div className="card bg-base-100  shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{coupon_title}</h2>
    <p>{description}</p>
    <p>Expiry date : {expiry_date}</p>
    <div className="card-actions justify-end">
      <Link to={`/brand/coupon/${coupon_code}`} className="btn btn-accent">get coupon</Link>
    </div>
  </div>
</div>
  )
}

export default SingleBrandCoupon