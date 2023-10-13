//state приходит из стора, экшн приходит из диспатч
import { makeid } from "../Helpers/MakeId";
import photosnap from "../assets/img/photosnap.svg";
import manage from "../assets/img/manage.svg";
import eyecam from "../assets/img/eyecam.svg";
import account from "../assets/img/account.svg";
import faceit from "../assets/img/faceit.svg";
import insure from "../assets/img/insure.svg";
import loop from "../assets/img/loopStudios.svg";
import myHome from "../assets/img/loopStudios.svg";
import shortly from "../assets/img/shortly.svg";
import airFilter from "../assets/img/airFilter.svg";
//function getImgUrl(name) {
// return new URL(`../assets/img/${name}.svg`, import.meta.url).href;}
//console.log(getImgUrl("photosnap"));

const initialState = [
  {
    id: makeid(5),
    companyName: "Photosnap",
    vacancyName: "FullStack Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "USA only",
    logo: photosnap,
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
    logo: manage,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Python", "React", "TypeScript"],
  },

  {
    id: makeid(5),
    companyName: "Eyecam",
    vacancyName: "Backend Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Germany",
    logo: eyecam,
    labels: ["New", "Featured"],
    tags: ["Backend", "Python", "MongoDB", "JavaScript"],
  },
  {
    id: makeid(5),
    companyName: "Account",
    vacancyName: "Junior Web Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: account,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript"],
  },
  {
    id: makeid(5),
    companyName: "Faceit",
    vacancyName: "Web Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: faceit,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Middle", "React", "TypeScript"],
  },
  {
    id: makeid(5),
    companyName: "Insure",
    vacancyName: "Software Engineer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: insure,
    labels: ["New", "Featured"],
    tags: ["Backend", "Midweight", "JavaScript", "Sass", "Ruby"],
  },
  {
    id: makeid(5),
    companyName: "Loop",
    vacancyName: "Junior Backend Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "United Kingdom",
    logo: loop,
    labels: ["New", "Featured"],
    tags: ["Backend", "Ror", "Sass", "Ruby"],
  },
  {
    id: makeid(5),
    companyName: "myHome",
    vacancyName: "Junior  Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "United Kingdom",
    logo: myHome,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript", "MongoDB"],
  },
  {
    id: makeid(5),
    companyName: "Shortly",
    vacancyName: "Junior  Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "EU only",
    logo: shortly,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript", "MongoDB"],
  },
  {
    id: makeid(5),
    companyName: "Air Filter",
    vacancyName: "Junior  Developer",
    publishingDate: Date.now(),
    employmentType: "Full Time",
    location: "Remote",
    logo: airFilter,
    labels: ["New", "Featured"],
    tags: ["FullStack", "Frontend", "Junior", "React", "TypeScript", "MongoDB"],
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
