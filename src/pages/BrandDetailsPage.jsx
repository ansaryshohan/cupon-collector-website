import { useLoaderData, useParams } from "react-router-dom";
import CommonBanner from "../components/shared/CommonBanner";
import Rating from "../components/shared/Rating";

const BrandDetailsPage = () => {
  const { brandId } = useParams();
  const data = useLoaderData();
  const brandData = data.find((singleData) => singleData._id === brandId);
  const { _id, brand_name, description, rating, brand_logo, coupons, category } =
    brandData;

  return (
    <div>
      <CommonBanner title={"Brand Coupons"} />
      {/* brand details */}
      <div className="flex justify-center gap-6 items-start pt-20 w-10/12 mx-auto">
        <div className="border">
          <img src={brand_logo} alt="" className="w-full h-44" />
        </div>
        <div className="border">
          <h2 className="text-2xl font-semibold">{brand_name}</h2>
          <p className=" my-2">{description}</p>
          <p className="flex items-center gap-2 py-0 my-0 ">
          <span className="font-medium">category : </span> {category}{" "}
        </p>
        <p className="flex items-center gap-2 py-0 my-0">
          <span className="font-medium">Rating : </span>{" "}
          <Rating starCount={rating} />{" "}
        </p>
        </div>

      </div>
    </div>
  );
};

export default BrandDetailsPage;
