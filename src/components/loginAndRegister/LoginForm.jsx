import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthContext from "../../hooks/useAuthContext";
import InputField from "./InputField";

const LoginForm = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errorState, setErrorState] = useState({
    emailError: "",
    loginError: "",
  });
  const [passwordToggle, setPasswordToggle] = useState(false);
  const { loginWithGoogle, loginWithEmailAndPassword, setForgetPasswordEmail } = useAuthContext();
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from || "/";

  const handleUserInputOnChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const emailInputValue = e.target.value;
      setForgetPasswordEmail(emailInputValue);
      const emailRegEx =
        /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
      if (!emailRegEx.test(emailInputValue)) {
        setErrorState({
          ...errorState,
          emailError: "Please provide a valid email.",
        });
        return;
      }
    }
    setErrorState({ ...errorState,  emailError: "" });
  };

  const handleLoginOnSubmit = (e) => {
    e.preventDefault();
    setErrorState({ ...errorState, loginError: "" });

    // email and password login
    if (!errorState.emailError && !errorState.passwordError) {
      loginWithEmailAndPassword(userInput.email, userInput.password)
        .then((result) => {
          if (result.user) {
            navigate(from, { replace: true });
            toast.success("login Successful");
          }
        })
        .catch((err) => setErrorState({ ...errorState, loginError: err.code }));
    }
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        if (result.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLoginOnSubmit}>
        <InputField label={"Email"} error={errorState.emailError}>
          <input
            type="email"
            placeholder="email"
            name="email"
            id="email"
            className="input input-bordered"
            value={userInput.email}
            onChange={handleUserInputOnChange}
            required
          />
        </InputField>
        <InputField
          label={"Password"}
          passwordToggle={passwordToggle}
          setPasswordToggle={setPasswordToggle}
        >
          <input
            type={passwordToggle ? "text" : "password"}
            placeholder="password"
            name="password"
            id="password"
            className="input input-bordered w-full"
            value={userInput.password}
            onChange={handleUserInputOnChange}
            required
          />
        </InputField>
        <label className="label">
          <Link to={"/forget-password"} className="label-text-alt link link-hover">
            Forgot password?
          </Link>
        </label>

        <InputField customClassName="mt-6 " error={errorState.loginError}>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </InputField>
        <label className=" text-start text-sm mt-2">
          <span>Don{"'"}t have an account?</span>
          <Link
            to={"/register"}
            className="label-text-alt link link-hover text-sky-700 text-sm"
          >
            {" "}
            register first!
          </Link>
        </label>
      </form>
      {/* social login */}
      <>
        <div className="flex items-center pt-1 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4 mb-5">
          <button
            aria-label="Log in with Google"
            className="p-3 rounded-lg btn mt-2"
            onClick={handleGoogleSignIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-orange-500"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
      </>
    </div>
  );
};

export default LoginForm;
