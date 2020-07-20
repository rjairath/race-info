import {
  GAME_SCHEDULE_LOADING,
  GAME_SCHEDULE_LOADED,
  GAME_SCHEDULE_ERRORS,
  GAME_DATA_LOADING,
  GAME_DATA_LOADED,
  GAME_DATA_ERRORS,
} from "../actions/types";

const initialState = {
  loading: false,
  searchQuery: "",
  gameSchedule: {},
  gameData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GAME_SCHEDULE_LOADING:
      return {
        ...state,
        loading: true,
        searchQuery: action.payload,
      };
    case GAME_SCHEDULE_LOADED:
      return {
        ...state,
        loading: false,
        gameSchedule: action.payload,
      };
    case GAME_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GAME_DATA_LOADED:
      return {
        ...state,
        loading: false,
        gameData: action.payload,
      };
    case GAME_SCHEDULE_ERRORS:
      return {
        ...state,
        loading: false,
        gameSchedule: {},
        gameData: {},
      };
    default:
      return state;
  }
}
