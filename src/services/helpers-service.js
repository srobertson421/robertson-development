export function getCurrentLocation(shouldCap) {
  let locationArr = location.pathname.split('/');
  let currentLocation = locationArr[locationArr.length - 1];
  if(!currentLocation || currentLocation === 'robertson-development') {
    return 'Home';
  } else if(shouldCap) {
    let displayLocation = currentLocation[0].toUpperCase() + currentLocation.substring(1, currentLocation.length);
    return displayLocation;
  } else {
    return currentLocation;
  }
}
