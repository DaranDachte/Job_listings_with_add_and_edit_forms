import { logoArray } from "../reducers/jobVacancies";

export const getRandomLogo = () => {
  return logoArray[Math.floor(Math.random() * logoArray.length)];
};
