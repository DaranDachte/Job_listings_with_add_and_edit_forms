import { Link } from "react-router-dom";

type FirstBlockBProps = {
  vacancyName: string;
  vacancyId: string;
};

const FirstBlockB: React.FC<FirstBlockBProps> = ({
  vacancyName,
  vacancyId,
}) => {
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
