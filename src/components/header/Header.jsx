import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { TbLogout, TbLogout2 } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/Couponcart-logo-small.png";
import useAuthContext from "../../hooks/useAuthContext";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut, setUser,setForgetPasswordEmail } = useAuthContext();
  const navigate = useNavigate();
  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        setForgetPasswordEmail("")
        navigate("/login");
      })
      .catch((error) => toast.error(error));
  };
  return (
    <div className=" bg-base-100 sticky top-0 z-50">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/brands"}>Brands</NavLink>
              </li>
              <li>
                <NavLink to={"/categories"}>Categories</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about-us"}>About Us</NavLink>
              </li>
            </ul>
          </div>
          <a className="text-xl">
            <img src={logoImg} alt="" className="w-12 sm:w-24 object-contain" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/brands"}>Brands</NavLink>
            </li>
            <li>
              <NavLink to={"/categories"}>Categories</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* dropdown btn */}
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className=" w-full text-end flex justify-center"
                >
                  {user?.photoURL ? (
                    <div className="text-sm">
                      {" "}
                      <img
                        src={user?.photoURL}
                        alt={user.displayName}
                        className="w-12 h-12 rounded-full"
                      />{" "}
                    </div>
                  ) : (
                    <div className="btn btn-ghost rounded-btn text-xl">
                      {" "}
                      <FaRegUserCircle />
                    </div>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/my-profile"}>
                      <FaUser /> My Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>
                      <TbLogout2 /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* login btn */}
              <div>
                <Link
                  to={"/login"}
                  className="flex justify-center items-center gap-1 text-xl btn btn-ghost"
                >
                  {" "}
                  <TbLogout /> <span className="text-lg">Log-In</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
