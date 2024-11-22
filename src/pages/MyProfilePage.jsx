import { Link } from "react-router-dom";
import CommonBanner from "../components/shared/CommonBanner";
import useAuthContext from "../hooks/useAuthContext";

const MyProfilePage = () => {
  const { user } = useAuthContext();
  const { displayName, email, photoURL } = user;
  console.log(user);
  return (
    <div>
      <CommonBanner title={`Welcome ${email}`} />
      <div className="flex items-center justify-center mt-10 mb-16">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            {photoURL ? (
              <img
                src={photoURL}
                alt="Shoes"
                className="w-32 h-32 rounded-full"
              />
            ) : (
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-red-500 border-2 border-red-500">
                {email.slice(0, 1).toUpperCase()}
              </div>
            )}
          </figure>
          <div className="card-body items-center text-center">
            {displayName && <p>Name : {displayName}</p>}
            {email && <p>Email : {email}</p>}

            {/* update profile button */}
            <div className="card-actions mt-4">
              <Link to={"/update-profile"}>
                <button className="btn btn-accent">Update Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
