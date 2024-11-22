/* eslint-disable react/prop-types */

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  label,
  children,
  htmlFor,
  error,
  customClassName = "",
  passwordToggle,
  setPasswordToggle,
}) => {
  const id = htmlFor || getChildrenId(children);

  return (
    <div className={`form-control ${customClassName ? customClassName : ""}`}>
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      {id === "password" ? (
        <div className="relative w-full">
          {children}{" "}
          <div className="absolute top-4 right-6">
            {passwordToggle ? (
              <button onClick={() => setPasswordToggle((prev) => !prev)}>
                <FaEye />
              </button>
            ) : (
              <button onClick={() => setPasswordToggle((prev) => !prev)}>
                <FaEyeSlash />
              </button>
            )}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}

      {!!error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </div>
  );
};

const getChildrenId = (child) => {
  const children = React.Children.only(child);
  if ("id" in children.props) {
    return children?.props?.id;
  }
};

export default InputField;
