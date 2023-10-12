import AddVacancy from "./AddVacancy/AddVacancy";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddVacancy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
