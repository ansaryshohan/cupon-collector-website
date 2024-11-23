import OurTeam from "../components/aboutUsPageComp/OurTeam";
import CommonBanner from "../components/shared/CommonBanner";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      <PageTitleWithHelmet title={"About-us"} />

      <CommonBanner title={"About Us"} />

      <div className="w-10/12 mx-auto">
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUsPage;
