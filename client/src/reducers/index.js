import { getServiceData } from "../actions/action.js";
import { uniqBy, sortBy } from "lodash";

var reducer = (
  state = {
    services: "hello"
  },
  action
) => {
  switch (action.type) {
    case "getServiceData":
      return { ...state, services: state.services };
    default:
      return state;
  }
};

export default reducer;
