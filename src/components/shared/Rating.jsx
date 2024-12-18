/* eslint-disable react/prop-types */
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ starCount }) => {
  const numberAfterPoint = Number(starCount.toFixed(2).split(".")[1]);
  const ceilNumber = Math.ceil(Number(starCount.toFixed(2)));

  if (starCount) {
    const arrayOfNumber = Array.from(Array(5), (d, i) => i + 1); //[1,2,3,4,5]

    const arrayOfStars = arrayOfNumber.map((numberFromArray, i) => {
      if (numberFromArray /* 4 */ <= Number(starCount) /* 3.8 */) {
        return <FaStar key={i} color="goldenrod" size={15} />; // filled star
      } else if (
        numberFromArray === ceilNumber /* 4 */ &&
        numberAfterPoint > 50
      ) {
        return <FaStarHalfAlt key={i} color="goldenrod" size={15} />; //half star
      } else {
        return <FaRegStar key={i} color="#012540" size={15} />; //empty star
      }
    });

    return <div className="flex gap-1">{arrayOfStars}</div>;
  }
};

export default Rating;