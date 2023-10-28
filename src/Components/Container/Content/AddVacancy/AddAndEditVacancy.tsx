import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_JOB_VACANCY, UPDATE_JOB_VACANCY } from "../../../../actions";
import { makeid5 } from "../../../../Helpers/MakeId";
import { isExist } from "../../../../Helpers/isExist";
import { getRandomLogo } from "../../../../Helpers/getRandomLogo";
import type { Vacancy } from '../../../../Helpers/domain';
import type { RootState } from '../../../../store';

const AddAndEditVacancy = () => {
  const jobVacancies: Vacancy[] = useSelector((state: RootState) => state.jobVacancies);
  const { id } = useParams();
  const vacancyInfo: Vacancy = jobVacancies.filter((vacancy) => vacancy.id === id)[0];

  const [companyName, setCompanyName] = useState(
    isExist(vacancyInfo) ? vacancyInfo.companyName : ""
  );
  const [vacancyName, setVacancyName] = useState(
    isExist(vacancyInfo) ? vacancyInfo.vacancyName : ""
  );
  const [employmentType, setEmploymentType] = useState(
    isExist(vacancyInfo) ? vacancyInfo.employmentType : ""
  );
  const [location, setLocation] = useState(
    isExist(vacancyInfo) ? vacancyInfo.location : ""
  );
  const [tags, setTags] = useState(
    isExist(vacancyInfo) ? vacancyInfo.tags.join(", ") : ""
  );
  const [labels, setLabels] = useState(
    isExist(vacancyInfo) ? vacancyInfo.labels.join(", ") : ""
  );
  const [description, setDescription] = useState(
    isExist(vacancyInfo) ? vacancyInfo.description : ""
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const labelClasses = "block text-gray-700 text-sm font-bold mb-4";
  const inputClasses = "text-[2rem] p-1 rounded mx-2 outline-none";
  const handleSubmit = (e) => {
    e.preventDefault();
    const allIn =
      companyName &&
      vacancyName &&
      employmentType &&
      location &&
      tags &&
      labels &&
      description;

    if (allIn) {
      if (isExist(vacancyInfo)) {
        const upDatedVacancyInfo = {
          ...vacancyInfo,
          companyName,
          vacancyName,
          employmentType,
          location,
          tags: tags.split(", "),
          labels: labels.split(", "),
          description,
        };
        dispatch(UPDATE_JOB_VACANCY(upDatedVacancyInfo));
      } else {
        const data = {
          companyName,
          vacancyName,
          employmentType,
          location,
          tags: tags.split(", "),
          labels: labels.split(", "),
          description,
          id: makeid5(),
          logo: getRandomLogo(),
          publishingDate: 'just now',
        };
        dispatch(ADD_JOB_VACANCY(data));
        // dispatch ({type:"ADD_JOB_VACANCY", payload:data })
      }

      setCompanyName("");
      setVacancyName("");
      setEmploymentType("");
      setLocation("");
      setTags("");
      setLabels("");
      setDescription("");
      navigate(-1);
    }
  };
  return (
    <div className="flex flex-col  w-[50rem]  my-0 mx-auto">
      <div className="w-[8rem] my-[2rem] text-center bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded">
        <Link to={"/"}>Back to List</Link>
      </div>
      <header>
        <h2 className="text-[3rem] bold text-[#008080] pb-3">
          {isExist(vacancyInfo) ? "Edit" : "Add"} Vacancy:{" "}
        </h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label className={labelClasses} htmlFor="companyName">
          <span className="text-[2rem] text-[#008080] ">Company Name:</span>
          <input
            className={inputClasses}
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            name="companyName"
          />
        </label>
        <label className={labelClasses} htmlFor="vacancyName">
          <span className="text-[2rem] text-[#008080] ">Vacancy Name: </span>
          <input
            className={inputClasses}
            type="text"
            value={vacancyName}
            onChange={(e) => setVacancyName(e.target.value)}
            name="vacancyName"
          />
        </label>
        <label className={labelClasses} htmlFor="employmentType">
          <span className="text-[2rem] text-[#008080]">Employment Type: </span>
          <input
            className={inputClasses}
            type="text"
            name="employmentType"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="location">
          <span className="text-[2rem] text-[#008080]">Employment Type: </span>
          <input
            className={inputClasses}
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="tags">
          <span className="text-[2rem] text-[#008080]">Tags: </span>
          <input
            className={inputClasses}
            type="text"
            name="tags"
            placeholder="tag1, tag2, tag3..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="labels">
          <span className="text-[2rem] text-[#008080]">Labels: </span>
          <input
            className={inputClasses}
            type="text"
            name="labels"
            placeholder="label1, label2, label3..."
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="description">
          <span className="text-[2rem] text-[#008080]"> Description: </span>
          <textarea
            className="outline-none rounded"
            name="description"
            value={description}
            rows={15}
            cols={100}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>

        <button className="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded">
          Send Vacancy
        </button>
      </form>
    </div>
  );
};

export default AddAndEditVacancy;
