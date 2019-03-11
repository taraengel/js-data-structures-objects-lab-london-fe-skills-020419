// Write your solution in this file!
const driver = 
{ driver: 'driver' };

function updateDriverWithKeyAndValue(driver, key, value) {
  const updatedDriver = { ...driver };
  updatedDriver[key] = value;
  return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]
  
}