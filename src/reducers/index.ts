import { combineReducers } from "redux";
import jobVacanciesReducers from "./jobVacancies";

const applicationReducers = combineReducers({
  jobVacancies: jobVacanciesReducers,
});

export default applicationReducers;
