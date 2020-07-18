import { GAME_SCHEDULE_ERRORS, GAME_DATA_ERRORS, CLEAR_ERRORS } from "./types";

export const returnGameScheduleError = (msg, status) => {
  return {
    type: GAME_SCHEDULE_ERRORS,
    payload: { msg, status },
  };
};

export const returnGameDataError = (msg, status) => {
  return {
    type: GAME_DATA_ERRORS,
    payload: { msg, status },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
