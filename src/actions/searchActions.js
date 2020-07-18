import {
  GAME_SCHEDULE_LOADING,
  GAME_SCHEDULE_LOADED,
  GAME_SCHEDULE_ERRORS,
  GAME_DATA_LOADING,
  GAME_DATA_LOADED,
  GAME_DATA_ERRORS,
} from "./types";
import { GET_GAME_SCHEDULE, GET_GAME_DATA } from "../constants/urls";
import { returnGameScheduleError, returnGameDataError } from "./errorActions";
import axios from "axios";

export const getGameSchedule = (search) => (dispatch) => {
  dispatch(setGamesScheduleLoading(search));
  const url = GET_GAME_SCHEDULE.replace("<gameType>", search);

  axios
    .get(url)
    .then((res) => {
      dispatch({ type: GAME_SCHEDULE_LOADED, payload: res.data });
      const gameId = extractGameId(res.data);
      dispatch(getGameData(gameId));
    })
    .catch((err) => {
      dispatch(
        returnGameScheduleError(
          "Please enter another value",
          err.response.status
        )
      );
    });
};

const extractGameId = (schedule) => {
  const { upcoming, results } = schedule;
  if (upcoming.length > 0) {
    return upcoming[0].id;
  } else if (results.length > 0) {
    return results[0].id;
  } else {
    return "";
  }
};

export const getGameData = (gameId) => (dispatch) => {
  dispatch(setGamesDataLoading());
  const url = GET_GAME_DATA.replace("<gameId>", gameId);

  axios
    .get(url)
    .then((res) => {
      dispatch({ type: GAME_DATA_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(
        returnGameDataError(
          "Error in loading data for the gameId",
          err.response.status
        )
      );
    });
};

export const setGamesScheduleLoading = (search) => {
  return {
    type: GAME_SCHEDULE_LOADING,
    payload: search,
  };
};

export const setGamesDataLoading = () => {
  return {
    type: GAME_DATA_LOADING,
  };
};
