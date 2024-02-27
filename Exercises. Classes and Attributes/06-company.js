class Company {
  constructor() {
    this.department = {};
  }

  addEmployee(name, salary, position, department) {
    salary = Number(salary);
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }
    if (!this.department[department]) {
      this.department[department] = {
        avg: 0,
        sumSalary: 0,
        employees: [],
      };
    }
    this.department[department].employees.push({ name, salary, position });
    this._updateDepartmentInfo(department, salary);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDepartmentArr = this._findBestDepartment();
    let buff = `Best Department is: ${bestDepartmentArr[0]}\n`;
    buff += `Average salary: ${bestDepartmentArr[1].avg.toFixed(2)}\n`;
    bestDepartmentArr[1].employees
      .sort((empl1, empl2) => {
        return (
          empl2.salary - empl1.salary || empl1.name.localeCompare(empl2.name)
        );
      })
      .forEach(
        (empl) => (buff += `${empl.name} ${empl.salary} ${empl.position}\n`)
      );
    return buff.trim();
  }

  _findBestDepartment() {
    return Object.entries(this.department).sort(
      (a, b) => b[1].avg - a[1].avg
    )[0];
  }

  _updateDepartmentInfo(department, salary) {
    let curDepartment = this.department[department];
    curDepartment.sumSalary += salary;
    curDepartment.avg =
      curDepartment.sumSalary / curDepartment.employees.length;
  }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(
  c.addEmployee("Pesho", 1500, "electrical engineer", "Construction")
);
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(
  c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing")
);
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
