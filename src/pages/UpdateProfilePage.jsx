import { useState } from "react";
import CommonBanner from "../components/shared/CommonBanner";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import PageTitleWithHelmet from "../components/shared/PageTitleWithHelmet";

const UpdateProfilePage = () => {
  const { user, updateUser } = useAuthContext();
  const { displayName, email, photoURL } = user;
  const [profileUser, setProfileUser] = useState({
    userName: displayName || "",
    photo: photoURL || "",
  });
  const navigate = useNavigate();

  const handleUpdateOnSubmit = (e) => {
    e.preventDefault();
    const updatedObj = {
      displayName: profileUser.userName,
      photoURL: profileUser.photo,
    };
    updateUser(updatedObj)
      .then(() => { navigate("/my-profile")})
      .catch((err) => console.error(err));
  };
  return (
    <div>
            <PageTitleWithHelmet title={"Profile Update"}/>

      <CommonBanner title={`Update Your Profile`} />
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
          <form
            className="card-body items-center text-center"
            onSubmit={handleUpdateOnSubmit}
          >
            <label htmlFor="userName" className="text-start w-full font-medium">
              User Name :
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="w-full input input-bordered input-accent"
              defaultValue={profileUser.userName}
              onChange={(e) =>
                setProfileUser({
                  ...profileUser,
                  userName: e.target.value,
                })
              }
            />
            <label htmlFor="photo" className="text-start w-full font-medium">
              PhotoUrl :
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="w-full input input-bordered input-accent"
              defaultValue={profileUser.photo}
              onChange={(e) =>
                setProfileUser({
                  ...profileUser,
                  photo: e.target.value,
                })
              }
            />

            {/* update profile button */}
            <div className="card-actions mt-4">
              <button className="btn btn-accent" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
