function workers(obj) {
  if (obj.dizziness == true) {
    obj["levelOfHydrated"] += obj.weight * 0.1 * obj.experience;
    obj.dizziness = false;
  }
  return obj;
}
// workers({
//   weight: 80,
//   experience: 1,
//   levelOfHydrated: 0,
//   dizziness: true,
// });

workers({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});
