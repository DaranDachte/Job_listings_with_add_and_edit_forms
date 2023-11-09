import { useSelector } from "react-redux";
import Item from "./Item/Item";
import { Link } from "react-router-dom";
import type { RootState } from "../../../../store";
import { Vacancy } from "../../../../Helpers/domain";

const List = () => {
  const jobVacancies: Vacancy[] = useSelector(
    (state: RootState) => state.jobVacancies
  );

  return (
    <div className="flex flex-col  w-[70rem]  my-0 mx-auto  ">
      <div className="my-5">
        <button className="bg-[#2E8B57] hover:bg-[#20B2AA] text-white font-bold py-2 px-4 rounded">
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
