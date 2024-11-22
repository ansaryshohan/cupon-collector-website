import { useState } from "react";
import { toast } from "react-toastify";
import InputField from "../components/loginAndRegister/InputField";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const ForgetPasswordPage = () => {
  const { forgotPasswordHandle, forgetPasswordEmail} =
    useAuthContext();
  const [emailInput, setEmailInput] = useState(forgetPasswordEmail);
  const [forgetPassError, setForgetPassError] = useState({
    emailErr: "",
    resetErr: "",
  });
  const navigate= useNavigate();

  const handleEmailOnChange = (e) => {
    const email = e.target.value;
    const emailRegEx =
      /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
    setForgetPassError({...forgetPassError,emailErr:""})
    if (!emailRegEx.test(email)) {
      setForgetPassError({
        ...forgetPassError,
        emailErr: "Please provide a valid email.",
      });
      return;
    }
    setEmailInput(e.target.value);
  };

  const handleForgetPassOnSubmit = (e) => {
    e.preventDefault();
    forgotPasswordHandle(emailInput)
      .then(() => {
        toast.success("password reset email sent");
        window.open("https://mail.google.com", "_blank");
        navigate("/login");
      })
      .catch((err) =>
        setForgetPassError({ ...forgetPassError, resetErr: err.code })
      );
  };

  return (
    <div className="w-full">
      <div className="bg-hero-img min-h-80 bg-bottom bg-cover bg-no-repeat bg-fixed ">
        <div className="w-full min-h-80 bg-gradient-to-b from-[#EEEEEE]/40 to-[#EEEEEE]/10 py-12">
          <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-5 backdrop-blur-xl bg-[#B3E2F4]/20 rounded-2xl p-8">
            {/* login text */}
            <div className=" w-full bg-gradient-to-r from-white/10 to-white/10 py-8 md:py-20">
              <h2 className=" text-[#012540] text-center text-4xl font-bold drop-shadow-lg ">
                Forgot Password!
              </h2>
            </div>
            {/* login form */}
            <div className=" w-full flex justify-center items-center">
              <form className="card-body" onSubmit={handleForgetPassOnSubmit}>
                <InputField label={"Email"} error={forgetPassError.emailErr}>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    className="input input-bordered"
                    defaultValue={emailInput}
                    onChange={handleEmailOnChange}
                    required
                  />
                </InputField>

                <InputField customClassName="mt-6 " error={forgetPassError.resetErr}>
                  <button className="btn btn-primary" type="submit">
                    Reset Password
                  </button>
                </InputField>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
