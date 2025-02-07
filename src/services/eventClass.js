export default class Event {
  constructor(title, start, end, allDay) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.allDay = allDay;
  }

  checkAndDestroy() {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now >= this.end) {
        console.log(`Event '${this.title}' has ended. Destroying object.`);
        clearInterval(intervalId); // Stop the interval
        this.destroy(); // Destroy the object
      }
    }, 1000); // Check every second
  }

  destroy() {
    // Remove all properties to "destroy" the object
    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        delete this[key];
      }
    }
    console.log("Object has been destroyed.");
  }
}

// Example usage:
// const event = new Event(
//   "Team Meeting",
//   new Date(2024, 11, 20, 10, 0), // December 20, 2024, 10:00 AM
//   new Date(2024, 11, 20, 11, 30), // December 20, 2024, 11:30 AM
//   false
// );

// event.checkAndDestroy();

// After the event ends, the object will be "destroyed"
// Trying to access `event.title` or other properties will return `undefined`