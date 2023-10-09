export const ADD_JOB_VACANCY = (payload) => ({
  type: "ADD_JOB_VACANCY",
  payload,
});

export const REMOVE_JOB_VACANCY = (payload: number) => ({
  type: "REMOVE_JOB_VACANCY",
  payload,
});
