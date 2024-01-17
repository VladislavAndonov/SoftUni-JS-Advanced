function roadRadar(speed, area) {
  let excessiveSpeed = 0;
  let status = "";
  let speedLimit = 0;

  if (area == "motorway") {
    speedLimit = 130;
    excessiveSpeed = speed - speedLimit;
    if (excessiveSpeed <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (excessiveSpeed <= 20) {
      status = "speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else if (excessiveSpeed <= 40) {
      status = "excessive speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      status = "reckless driving";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  } else if (area == "interstate") {
    speedLimit = 90;
    excessiveSpeed = speed - speedLimit;
    if (excessiveSpeed <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (excessiveSpeed <= 20) {
      status = "speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else if (excessiveSpeed <= 40) {
      status = "excessive speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      status = "reckless driving";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  } else if (area == "city") {
    speedLimit = 50;
    excessiveSpeed = speed - speedLimit;
    if (excessiveSpeed <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (excessiveSpeed <= 20) {
      status = "speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else if (excessiveSpeed <= 40) {
      status = "excessive speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      status = "reckless driving";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  } else if (area == "residential") {
    speedLimit = 20;
    excessiveSpeed = speed - speedLimit;
    if (excessiveSpeed <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (excessiveSpeed <= 20) {
      status = "speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else if (excessiveSpeed <= 40) {
      status = "excessive speeding";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      status = "reckless driving";
      console.log(
        `The speed is ${excessiveSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  }
}
roadRadar(210, "interstate");
