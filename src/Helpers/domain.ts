export type Vacancy = {
  id: string;
  companyName: string;
  vacancyName: string;
  publishingDate: string;
  employmentType: string;
  location: string;
  logo: string;
  labels: string[];
  tags: string[];
  description: string;
};

export type VacancyId = string;
export type NewVacancy = Omit<Vacancy, 'id'>;

export type ActionWithoutPayload = {
  type: string;
  payload: null;
};

export type RemoveJobAction = {
  type: string;
  payload: string;
}

export type AddJobAction = {
  type: string;
  payload: NewVacancy;
}

export type UpdateJobAction = {
  type: string;
  payload: Vacancy;
}

type ActionWithPayload = AddJobAction | UpdateJobAction | RemoveJobAction ;

export type Action = ActionWithPayload | ActionWithoutPayload;
