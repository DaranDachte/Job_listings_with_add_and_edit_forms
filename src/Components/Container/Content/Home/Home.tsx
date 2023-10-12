import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <div>
        <Link to={"/add"}> Add Vacancy</Link>
      </div>
      <List />
    </div>
  );
};

export default Home;
