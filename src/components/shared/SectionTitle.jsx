/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subtitle="" }) => {
  // console.log(couponData);
  return (
    <div className="pb-8 text-center">
      {title && (
        <h3 className="text-4xl font-bold text-primary-color ">{title}</h3>
      )}
      {title && (
        <div className="w-40 h-2 bg-secondary-color my-5 mx-auto"></div>
      )}

      {subtitle && (
        <p className="text-4xl font-bold text-secondary-color">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
