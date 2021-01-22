class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food > 0) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
  }
}
class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
    this.emptySeats = 0;
  }
  getAvailableSeatCount() {
    this.emptySeats = this.capacity - this.passengers.length;
    return this.emptySeats;
  }
  join(Traveler) {
    this.getAvailableSeatCount();
    if (this.emptySeats > 0) {
      this.passengers.push(Traveler);
    }
  }
  shouldQuarantine() {
    if (this.passengers.some((passengers) => passengers.isHealthy === false)) {
      return true;
    } else {
      return false;
    }
  }
  totalFood() {
    let totalPassengersFood = 0;
    for (let i = 0; i < this.passengers.length; i += 1) {
      totalPassengersFood = this.passengers[i].food + totalPassengersFood;
    }

    return totalPassengersFood;
  }
}
