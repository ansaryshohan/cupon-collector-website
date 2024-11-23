import { Link, useLoaderData } from "react-router-dom";
import CommonBanner from "../components/shared/CommonBanner";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const CategoryPage = () => {
  const allBrandData = useLoaderData();
  const allCategoryData= allBrandData.map(singleBrand=>{return{_id:singleBrand._id,category:singleBrand.category}})
  
  const uniqueCategories = [];
const addedCategories = []; // Array to track added categories

allCategoryData.forEach((item) => {
  if (!addedCategories.includes(item.category)) {
    addedCategories.push(item.category); // Track category
    uniqueCategories.push({ id: item._id, category: item.category });
  }
});

  return (
    <div className="w-full">
      <PageTitleWithHelmet title={"Category"} />

      <CommonBanner title={"Categories"} />
      <div className="w-10/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {uniqueCategories.map((singleCategory) => (
            <Link key={singleCategory.id} to={`/brand/${singleCategory.id}`}>
            <div  className="p-10 rounded-xl bg-sky-100 text-2xl font-semibold text-center hover:text-purple-500">
              {singleCategory.category}
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
