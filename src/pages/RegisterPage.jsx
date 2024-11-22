import RegisterForm from "../components/loginAndRegister/RegisterForm";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const RegisterPage = () => {
  return (
    <div className="w-full">
      <PageTitleWithHelmet title={"Register"}/>
      <div className="bg-hero-img min-h-80 bg-bottom bg-cover bg-no-repeat bg-fixed ">
        <div className="w-full min-h-80 bg-gradient-to-b from-[#EEEEEE]/40 to-[#EEEEEE]/10 py-12">
          <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-5 backdrop-blur-xl bg-[#B3E2F4]/20 rounded-2xl p-8">
            {/* login text */}
            <div className=" w-full bg-gradient-to-r from-white/10 to-white/10 py-8 md:py-20">
              <h2 className=" text-[#012540] text-center text-4xl font-bold drop-shadow-lg ">
                Register First!
              </h2>
              <p className="text-lg font-medium text-[#012540]/70 text-center mt-4 drop-shadow-xl">
                {" "}
                Register first to get access of exciting sales coupon from top
                websites.{" "}
              </p>
            </div>
            {/* login form */}
            <div className=" w-full flex justify-center items-center">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
