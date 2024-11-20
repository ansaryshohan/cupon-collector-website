/* eslint-disable react/prop-types */

import React from "react";

const InputField = ({
  label,
  children,
  htmlFor,
  error,
  customClassName = "",
}) => {
  const id = htmlFor || getChildrenId(children);

  return (
    <div className={`form-control ${customClassName ? customClassName : ""}`}>
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      {children}

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
