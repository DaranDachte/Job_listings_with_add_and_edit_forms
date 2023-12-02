import GreyRound from "../../../../../../../assets/img/GreyRound.svg";

type FirstBlockCProps = {
  publishingDate: string;
  employmentType: string;
  location: string;
};

const FirstBlockC: React.FC<FirstBlockCProps> = ({
  publishingDate,
  employmentType,
  location,
}) => {
  return (
    <div className="flex justify-start items-center  text-[#7C8F8F] font-medium ">
      <span className="text-[1.125rem] font-medium"> {publishingDate}</span>
      <span>
        <img className="mx-[1rem]" src={GreyRound} alt="GreyRound" />
      </span>
      <span className="text-[1.125rem] font-medium">{employmentType}</span>
      <span>
        {" "}
        <img className="mx-[1rem]" src={GreyRound} alt="GreyRound" />
      </span>
      <span className="text-[1.125rem] font-medium">{location}</span>
    </div>
  );
};

export default FirstBlockC;
