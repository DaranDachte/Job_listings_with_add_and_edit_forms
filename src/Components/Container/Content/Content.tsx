import AddVacancy from "./AddVacancy/AddVacancy";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VacancyDetails from "./VacancyDetails/VacancyDetails";
const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddVacancy />} />
        <Route path="/details/:id" element={<VacancyDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
