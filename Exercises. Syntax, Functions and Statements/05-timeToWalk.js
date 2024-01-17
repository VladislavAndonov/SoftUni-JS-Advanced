function solve(steps, footprintLength, speed) {
  let distance = steps * footprintLength;
  let breaksCount = Math.floor(distance / 500);
  let speedInMeterPerSec = (speed / 3600) * 1000;
  let timeInSec = distance / speedInMeterPerSec + breaksCount * 60;

  let hours = Math.floor(timeInSec / 3600);
  let mins = Math.floor((timeInSec - hours * 3600) / 60);
  let secs = Math.round(timeInSec - mins * 60);

  console.log(
    (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (mins < 10 ? "0" : "") +
      mins +
      ":" +
      (secs < 10 ? "0" : "") +
      secs
  );
}

solve(4000, 0.6, 5);
// solve(2564, 0.7, 5.5);
