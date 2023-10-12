import { useSelector } from "react-redux";
import Item from "./Item/Item";

const List = () => {
  const jobVacancies = useSelector((state) => state.jobVacancies);

  return (
    <div className="flex flex-col  w-[70rem]  my-0 mx-auto">
      <ul>
        {jobVacancies.map((vacancy) => (
          <Item key={vacancy.id} vacancy={vacancy} />
        ))}
      </ul>
    </div>
  );
};

export default List;
