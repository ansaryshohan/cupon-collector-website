import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailComp from "../components/brandDetailsPageComponents/BrandDetailComp";
import SingleCouponCard from "../components/brandDetailsPageComponents/SingleCouponCard";
import CommonBanner from "../components/shared/CommonBanner";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const BrandDetailsPage = () => {
  const { brandId } = useParams();
  const data = useLoaderData();
  const brandData = data.find((singleData) => singleData._id === brandId);
  const { coupons, brand_name } = brandData;

  return (
    <div>
      <PageTitleWithHelmet title={brand_name} />

      <CommonBanner title={"Brand Coupons"} />
      {/* brand details */}
      <BrandDetailComp brandData={brandData} />

      <div className="divider my-1 w-10/12 mx-auto before:bg-sky-300 after:bg-sky-300"></div>
      {/* coupon cards of the brand */}
      <div className="flex flex-col items-center justify-between gap-7 divide-y divide-sky-300 w-9/12 mx-auto">
        {coupons.map((coupon) => (
          <SingleCouponCard
            key={coupon.coupon_code}
            singleCoupon={coupon}
            brandData={brandData}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandDetailsPage;
