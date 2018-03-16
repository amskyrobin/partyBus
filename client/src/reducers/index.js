import { getServiceData } from "../actions/action.js";

var reducer = (
  state = {
    services: []
  },
  action
) => {
  switch (action.type) {
    case "getServiceData":
      return { ...state, services: !state.services };

      return state;
  }
};

export default reducer;
