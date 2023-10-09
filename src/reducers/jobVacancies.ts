//state приходит из стора, экшн приходит из диспатч
import { makeid } from "../Helpers/MakeId";
const initialState = [
  {
    id: makeid(5),
    companyName: "Photosnap",
    vacancyName: "FullStack Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "USA only",
    logo: "url",
    labels: ["New", "Featured"],
    tags: ["Frontend", "Senior", "Html", "Css", "JavaScript"],
  },
  {
    id: makeid(5),
    companyName: "Manage",
    vacancyName: "Senior Frontend Developer",
    publishingDate: Date.now(),
    employmentType: "Part Time",
    location: "Remote",
    logo: "url",
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Python", "React", "TypeScript"],
  },
];

const jobVacanciesReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_JOB_VACANCY":
      return [...state, payload];
    //редюсер всегда возвращает новый стейт

    case "REMOVE_JOB_VACANCY":
      return state.filter((vacancy) => vacancy.id !== action.payload);

    default:
      return state;
  }
};

export default jobVacanciesReducers;
