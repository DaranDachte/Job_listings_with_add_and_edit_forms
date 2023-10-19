import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FirstBlock from "./FirstBlock/FirstBlock";
import Logo from "./Logo/Logo";
import Tags from "./Tags/Tags";
import { REMOVE_JOB_VACANCY } from "../../../../../actions";
const Item = ({ vacancy }) => {
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
  const handleDeleteVacancy = (id) => {
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
      <div className="h-[2rem] w-[5rem]">
        <button
          onClick={() => navigate(`/details/${vacancy.id}/edit`)}
          className="hover:text-[#FFF] rounded bg-[#89CFF0] text-[#041E42]  hover:bg-[#5CA5A5]  tracking-[-0.00769rem]  hover:cursor-pointer "
        >
          Edit
        </button>
      </div>
      <div className="h-[2rem] w-[5rem]">
        <button
          className="hover:text-[#FFF] rounded bg-[#89CFF0] text-[#041E42]  hover:bg-[#5CA5A5]  tracking-[-0.00769rem]  hover:cursor-pointer "
          onClick={() => handleDeleteVacancy(vacancy.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
