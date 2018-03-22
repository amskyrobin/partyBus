import { uniqBy, sortBy } from "lodash";

var reducer = (
  state = {
    services: null,
    routesData: null
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "setServiceData":
      return { ...state, services: action.servicesArray };
    case "setRouteData":
      return { ...state, routesData: action.routesArray };
    default:
      return state;
  }
};

export default reducer;
