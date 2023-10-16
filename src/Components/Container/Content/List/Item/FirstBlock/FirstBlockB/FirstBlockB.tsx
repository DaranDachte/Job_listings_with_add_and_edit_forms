import { Link } from "react-router-dom";

const FirstBlockB = ({ vacancyName, vacancyId }) => {
  return (
    <div className="flex justify-between ">
      <div>
        <Link to={`/details/${vacancyId}`}>
          <p className="text-[#2B3939]">{vacancyName}</p>
        </Link>
      </div>
    </div>
  );
};

export default FirstBlockB;
