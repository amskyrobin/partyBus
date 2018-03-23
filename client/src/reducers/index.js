import { uniqBy, sortBy } from "lodash";

var reducer = (
  state = {
    services: null,
    routesData: null, 
    serviceName: null
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "setServiceData":
      return { ...state, services: action.servicesArray };
    case "setRouteData":
      return { ...state, routesData: action.routesArray };
      case "setServiceName":
      return {...state, serviceName: action.serviceName}
    default:
      return state;
  }
};

export default reducer;
