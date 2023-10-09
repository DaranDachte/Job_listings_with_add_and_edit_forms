import { useSelector } from "react-redux";
import Item from "./Item/Item";

const List = () => {
  const jobVacancies = useSelector((state) => state.jobVacancies);
  console.log(jobVacancies);

  return (
    <div>
      <ul>
        {jobVacancies.map((vacancy) => (
          <Item key={vacancy.id} vacancy={vacancy} />
        ))}
      </ul>
    </div>
  );
};

export default List;
