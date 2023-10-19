import AddAndEditVacancy from "./AddVacancy/AddAndEditVacancy";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VacancyDetails from "./VacancyDetails/VacancyDetails";
const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddAndEditVacancy />} />
        <Route path="/details/:id" element={<VacancyDetails />} />
        <Route path="/details/:id/edit" element={<AddAndEditVacancy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
