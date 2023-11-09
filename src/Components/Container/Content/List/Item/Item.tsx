import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FirstBlock from "./FirstBlock/FirstBlock";
import Logo from "./Logo/Logo";
import Tags from "./Tags/Tags";
import { REMOVE_JOB_VACANCY } from "../../../../../actions";
import { Vacancy } from "../../../../../Helpers/domain";

export type ParamsT = {
  vacancyName: string;
  companyName: string;
  labels: string[];
  publishingDate: string;
  employmentType: string;
  location: string;
  tags: string[];
  id: string;
};

type ItemProps = {
  vacancy: Vacancy;
};

const Item: React.FC<ItemProps> = ({ vacancy }) => {
  const params = {
    vacancyName: vacancy.vacancyName,
    companyName: vacancy.companyName,
    labels: vacancy.labels,
    publishingDate: vacancy.publishingDate,
    employmentType: vacancy.employmentType,
    location: vacancy.location,
    tags: vacancy.tags,
    id: vacancy.id,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteVacancy = (id: string) => {
    dispatch(REMOVE_JOB_VACANCY(id));
  };

  return (
    <div className="flex  justify-between rounded mb-[1.5rem] py-[2rem] px-[3rem]  bg-[#fff] ">
      <div className=" flex w-1/2">
        <Logo logo={vacancy.logo} />
        <FirstBlock params={params} />
      </div>
      <div className="flex items-center  justify-end w-1/2">
        <Tags tags={vacancy.tags} />
      </div>
      <div className="flex items-center justify-end pl-10">
        <div className="h-[2rem] w-[5rem]">
          <span
            onClick={() => navigate(`/details/${vacancy.id}/edit`)}
            className="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-normal p-2 mx-1 rounded tracking-[-0.00769rem]  hover:cursor-pointer"
          >
            Edit
          </span>
          <span
            className="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-normal p-2 mx-1 rounded tracking-[-0.00769rem]  hover:cursor-pointer"
            onClick={() => handleDeleteVacancy(vacancy.id)}
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
