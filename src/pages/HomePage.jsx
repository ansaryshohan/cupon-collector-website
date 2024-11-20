import Banner from "../components/homepageComponents/Banner";
import BrandsMarqueeSection from "../components/homepageComponents/BrandsMarqueeSection";
import BrandsOnSellSection from "../components/homepageComponents/BrandsOnSellSection";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* banner or slider */}
      <Banner/>
      {/* top brands marquee */}
      <BrandsMarqueeSection/>
      {/* brand where sells is on */}
      <BrandsOnSellSection/>
    </div>
  );
};

export default HomePage;
