import Banner from "../components/homepageComponents/Banner";
import BrandsMarqueeSection from "../components/homepageComponents/BrandsMarqueeSection";
import BrandsOnSellSection from "../components/homepageComponents/BrandsOnSellSection";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const HomePage = () => {
  return (
    <div className="w-full">
      <PageTitleWithHelmet title={"Home"} />
      {/* banner or slider */}
      <Banner />
      {/* top brands marquee */}
      <BrandsMarqueeSection />
      {/* brand where sells is on */}
      <BrandsOnSellSection />
    </div>
  );
};

export default HomePage;
