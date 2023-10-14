import { useSelector } from "react-redux";
import Item from "./Item/Item";
import { Link } from "react-router-dom";

const List = () => {
  const jobVacancies = useSelector((state) => state.jobVacancies);

  return (
    <div className="flex flex-col  w-[70rem]  my-0 mx-auto">
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to={"/add"}> Add Vacancy</Link>
        </button>
      </div>
      <ul>
        {jobVacancies.map((vacancy) => (
          <Item key={vacancy.id} vacancy={vacancy} />
        ))}
      </ul>
    </div>
  );
};

export default List;
