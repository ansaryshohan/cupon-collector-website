import CommonBanner from "../components/shared/CommonBanner";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const CategoryPage = () => {
  return (
    <div className="w-full">  
        <PageTitleWithHelmet title={"Category"}/>

      <CommonBanner title={"Categories"} />
      <div className="w-10/12 mx-auto py-16">
      
      </div>
    </div>
  )
}

export default CategoryPage