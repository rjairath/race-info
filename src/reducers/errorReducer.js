import {
  GAME_SCHEDULE_ERRORS,
  GAME_DATA_ERRORS,
  CLEAR_ERRORS,
} from "../actions/types";

const initialState = {
  msg: "",
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GAME_SCHEDULE_ERRORS:
    case GAME_DATA_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };

    case CLEAR_ERRORS:
      return {
        msg: "",
        status: null,
      };
    default:
      return state;
  }
}
