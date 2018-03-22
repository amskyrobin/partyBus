export function setServiceData(servicesArray) {
  return {
    type: "setServiceData",
    servicesArray: servicesArray
  };
}

export function setRouteData(routesArray) {
  return {
    type: "setRouteData",
    routesArray: routesArray
  };
}
