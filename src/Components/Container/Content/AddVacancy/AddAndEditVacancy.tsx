import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_JOB_VACANCY, UPDATE_JOB_VACANCY } from "../../../../actions";
import { makeid5 } from "../../../../Helpers/MakeId";
import { isExist } from "../../../../Helpers/isExist";
const AddAndEditVacancy = () => {
  const jobVacancies = useSelector((state) => state.jobVacancies);
  const { id } = useParams();
  const vacancyInfo = jobVacancies.filter((vacancy) => vacancy.id === id)[0];

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

  const labelClasses = "block text-gray-700 text-sm font-bold mb-2";
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
      <div>
        <Link to={"/"}>Back to List</Link>
      </div>
      <header>
        <h2>{isExist(vacancyInfo) ? "Edit" : "Add"} Vacancy </h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label className={labelClasses} htmlFor="companyName">
          <span>Company Name: </span>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            name="companyName"
            placeholder="Company Name"
          />
        </label>
        <label className={labelClasses} htmlFor="vacancyName">
          <span>Vacancy Name: </span>
          <input
            type="text"
            value={vacancyName}
            onChange={(e) => setVacancyName(e.target.value)}
            name="vacancyName"
            placeholder="Vacancy Name"
          />
        </label>
        <label className={labelClasses} htmlFor="employmentType">
          <span>Employment Type: </span>
          <input
            type="text"
            name="employmentType"
            placeholder="Employment Type"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="location">
          <span>Employment Type: </span>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="tags">
          <span>Tags: </span>
          <input
            type="text"
            name="tags"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="labels">
          <span>Labels: </span>
          <input
            type="text"
            name="labels"
            placeholder="Labels"
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
          />
        </label>
        <label className={labelClasses} htmlFor="description">
          <span> Description: </span>
          <textarea
            name="description"
            value={description}
            rows={15}
            cols={100}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Vacancy
        </button>
      </form>
    </div>
  );
};

export default AddAndEditVacancy;
