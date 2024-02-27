function cityTaxes(name, population, treasury) {
  let city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(persentage) {
      this.population += Math.floor(this.population * persentage) / 100;
    },
    applyRecession(percentage) {
      this.treasury -= Math.ceil(this.treasury * percentage) / 100;
    },
  };
  return city;
}
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
