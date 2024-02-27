function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const textareaRef = document.querySelector("textarea");
  const bestRestaurantInfo = document.querySelector("#bestRestaurant p");
  const bestRestaurantWorkersInfo = document.querySelector("#workers p");

  function onClick() {
    let data = JSON.parse(textareaRef.value);
    let result = {};

    for (let line of data) {
      let [name, workers] = line.split(" - ");
      if (!result.hasOwnProperty(name)) {
        result[name] = {
          avgSalary: 0,
          bestSalary: 0,
          workers: [],
        };
      }
      let currentWorkers = getArrOfWorkers(workers, result[name].workers);
      result[name].workers = sortWorkers(currentWorkers);
      updateSalary(result[name]);
    }
    let bestRestaurant = findBestRestaurant(result);
    appendBestRestaurantInfo(bestRestaurant);
    appendBestRestaurantWorkersInfo(bestRestaurant[1].workers);
  }

  function appendBestRestaurantWorkersInfo(workers) {
    let buff = "";
    workers.forEach(
      (worker) =>
        (buff += `Name: ${worker.name} With Salary: ${worker.salary} `)
    );
    bestRestaurantWorkersInfo.textContent = buff;
  }

  function appendBestRestaurantInfo(data) {
    bestRestaurantInfo.textContent = `Name: ${
      data[0]
    } Average Salary: ${data[1].avgSalary.toFixed(
      2
    )} Best Salary: ${data[1].bestSalary.toFixed(2)}`;
  }

  function findBestRestaurant(restaurants) {
    return Object.entries(restaurants).sort((a, b) => {
      return b[1].avgSalary - a[1].avgSalary;
    })[0];
  }

  function sortWorkers(workers) {
    return workers.sort((workerA, workerB) => workerB.salary - workerA.salary);
  }

  function updateSalary(restaurant) {
    let sumSalary = 0;
    let bestSalary = 0;
    restaurant.workers.forEach((worker) => {
      sumSalary += worker.salary;
      if (bestSalary < worker.salary) {
        bestSalary = worker.salary;
      }
    });
    restaurant.bestSalary = bestSalary;
    restaurant.avgSalary = sumSalary / restaurant.workers.length;
  }

  function getArrOfWorkers(workersData, existingWorkers) {
    let getArrOfWorkers = workersData.split(", ");

    for (let tokens of getArrOfWorkers) {
      let [name, salary] = tokens.split(" ");
      existingWorkers.push({
        name,
        salary: Number(salary),
      });
    }

    return existingWorkers;
  }
}
