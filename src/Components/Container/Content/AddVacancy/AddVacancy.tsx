import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_JOB_VACANCY } from "../../../../actions";
import { makeid5 } from "../../../../Helpers/MakeId";

const DESCRIPTION_TEXT =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi mollitia unde eaque voluptatibus nihil minima nisi facilis eveniet, numquam dolorem, nemo labore aliquid id doloribus voluptate corrupti non, hic consequuntur vero laboriosam? Assumenda, dolores necessitatibus! Esse quibusdam qui nam voluptas beatae magnam enim neque quis eos ut? Dicta laborum mollitia error nihil repellendus consectetur illum quaerat officiis laboriosam fugit velit eius hic, autem magnam explicabo reiciendis at. Similique porro sint eius modi dolores deserunt ipsa obcaecati voluptatibus animi quisquam quibusdam provident, ducimus nihil sit velit eligendi hic minima eum est voluptate, officiis magnam magni neque doloremque. Molestias voluptas animi at reiciendis velit dolorem quaerat odio nisi vitae reprehenderit, earum soluta possimus non tempore omnis impedit laudantium ratione quo laboriosam fuga! Sed excepturi quisquam doloremque aliquid, ipsam, fuga quibusdam laboriosam, explicabo consectetur obcaecati minus tenetur est eum officiis vel nostrum ipsa. Veniam praesentium pariatur dolorem architecto autem numquam, adipisci obcaecati eum laudantium sequi nisi qui iste excepturi reprehenderit error hic exercitationem alias nobis commodi ut asperiores voluptate nam possimus! Rem debitis veritatis, tempore nesciunt temporibus fugiat iste qui tenetur illo. Sapiente sunt repellendus sit deserunt quam culpa consequatur est, doloremque dignissimos, sequi cupiditate odit suscipit officiis voluptate itaque ipsam assumenda!";
const AddVacancy = () => {
  const [companyName, setCompanyName] = useState("");
  const [vacancyName, setVacancyName] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [labels, setLabels] = useState("");
  const [description, setDescription] = useState("");

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
        <h2>AddVacancy</h2>
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

export default AddVacancy;
