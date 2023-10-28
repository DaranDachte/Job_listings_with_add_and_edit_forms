import type {
  Vacancy,
  NewVacancy,
  VacancyId,
  AddJobAction,
  RemoveJobAction,
  UpdateJobAction
} from '../Helpers/domain';

export const ADD_JOB_VACANCY = (payload: NewVacancy): AddJobAction => ({
  type: "ADD_JOB_VACANCY",
  payload,
});

export const REMOVE_JOB_VACANCY = (payload: VacancyId): RemoveJobAction => ({
  type: "REMOVE_JOB_VACANCY",
  payload,
});

export const UPDATE_JOB_VACANCY = (payload: Vacancy): UpdateJobAction => ({
  type: "UPDATE_JOB_VACANCY",
  payload,
});
