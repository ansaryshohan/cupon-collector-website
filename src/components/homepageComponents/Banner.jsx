import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../assets/slider1.jpg";
import sliderImg2 from "../../assets/slider2.jpg";
import sliderImg3 from "../../assets/slider3.jpg";
import sliderImg4 from "../../assets/slider4.jpg";
import SingleSlider from "./SingleSlider";

const bannerData = [
  { image: sliderImg1, title: "Only the best discounts & coupons", subTitle: "Over 17 working discount & coupon codes is active for 3 users, enjoy!" },
  { image: sliderImg2, title: "", subTitle: "" },
  { image: sliderImg3, title: "", subTitle: "" },
  { image: sliderImg4, title: "Find Best Deals in BD", subTitle: "Find the best coupons and deals for you" },
];

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          draggable={true}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerData.map((singleBanner, idx) => (
            <SwiperSlide key={idx}  >
              <SingleSlider singleBanner={singleBanner}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
