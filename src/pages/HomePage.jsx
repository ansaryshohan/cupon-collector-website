import ContactUsForm from "../components/contactusPageComp/ContactUsForm";
import Banner from "../components/homepageComponents/Banner";
import BlogCards from "../components/homepageComponents/BlogCards";
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
      {/* blog cards section */}
      <BlogCards/>
      {/* contact us section  */}
      <div className="bg-gray-100 py-20">
      <ContactUsForm/>
      </div>
    </div>
  );
};

export default HomePage;
