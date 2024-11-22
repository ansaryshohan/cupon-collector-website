import { useLoaderData, useParams } from "react-router-dom";
import CommonBanner from "../components/shared/CommonBanner";
import BrandDetailComp from "../components/brandDetailsPageComponents/BrandDetailComp";
import SingleCouponCard from "../components/brandDetailsPageComponents/SingleCouponCard";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";
import { ToastContainer } from "react-toastify";

const CouponDetailsPage = () => {
  const allBrandData= useLoaderData();
  const{couponCode}= useParams();

  const brandData= allBrandData.filter(singleData=>singleData.coupons.find(coupon=>coupon.coupon_code===couponCode));
  const couponData= brandData.map(singleData=>singleData.coupons.find(coupon=>coupon.coupon_code===couponCode))

  
  return (
    <div>
      <CommonBanner title={"Coupon Details"}/>
      <PageTitleWithHelmet title={brandData[0].brand_name}/>
      <ToastContainer position="top-center"/>

      {
        brandData.map(singleData=> <BrandDetailComp brandData={singleData}  key={singleData._id}/>)
      }
      <div className="divider w-7/12 mx-auto"></div>
      {
        couponData.map(coupon=><SingleCouponCard brandData={brandData[0]} singleCoupon={coupon}  key={coupon.coupon_code}/> )
      }
      
      
    </div>
  )
}

export default CouponDetailsPage