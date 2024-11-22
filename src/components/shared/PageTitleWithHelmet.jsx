/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const PageTitleWithHelmet = ({title}) => {
  return (
    <Helmet>
        <title>{title} | Coupon-Cart</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
  )
}

export default PageTitleWithHelmet