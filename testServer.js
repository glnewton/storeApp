// create a timer function that acctions the total time as a parameter
// create a function that will take the time and convert it to a string
const time = (totalTime) => {
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = Math.floor(totalTime % 60);
  return `${hours}:${minutes}:${seconds}`;
}