import { SET_SERVICE_DATA } from "../actions/action.js";
import { uniqBy, sortBy } from "lodash";

var reducer = (
  state = {
    services: []
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case SET_SERVICE_DATA:
      console.log("state", state.services);
      return { ...state, services: action.servicesArray };
    default:
      return state;
  }
};

export default reducer;
