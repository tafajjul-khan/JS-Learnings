// 1. Interfaces / Abstractions (Contracts)
// Interface Segregation Principle (ISP) & Single Responsibility (SRP)
class LibraryItem {
  constructor(id, title, value) {
    if (this.constructor === LibraryItem) {
      throw new Error("Abstract class cannot be instantiated.");
    }
    this.id = id;
    this.title = title;
    this.value = value;
  }

  // Common Methods
  getDetails() {
    return `${this.title} (ID: ${this.id})`;
  }
}

// Separate Contract for Late Fee Calculation (ISP)
class LateFeeCalculable {
  calculateLateFee(daysLate) {
    throw new Error("Method 'calculateLateFee()' must be implemented.");
  }
}

// 2. Concrete Items (Extending Abstractions)
// Open/Closed Principle (OCP) & Liskov Substitution Principle (LSP)
class Book extends LibraryItem {
  constructor(id, title, value, author) {
    super(id, title, value);
    this.author = author;
  }

  calculateLateFee(daysLate) {
    return daysLate * 10; // ₹10/day
  }
}

class CD extends LibraryItem {
  constructor(id, title, value, artist) {
    super(id, title, value);
    this.artist = artist;
  }

  calculateLateFee(daysLate) {
    return daysLate * 20; // ₹20/day
  }
}

class DVD extends LibraryItem {
  constructor(id, title, value, director) {
    super(id, title, value);
    this.director = director;
  }

  calculateLateFee(daysLate) {
    return daysLate * 30; // ₹30/day
  }
}

// 3. Late Fee Calculator Service
// Single Responsibility Principle (SRP)
class LateFeeCalculator {
  calculateTotalLateFee(itemsWithDays) {
    // itemsWithDays = [{ item: ItemObject, daysLate: number }]
    return itemsWithDays.reduce((total, { item, daysLate }) => {
      return total + item.calculateLateFee(daysLate);
    }, 0);
  }
}

// 4. Main Library System
// Dependency Inversion Principle (DIP) - Abstractions/Items par depend karta hai
class Library {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  // Calculate total value of all items in the library
  calculateTotalValue() {
    return this.items.reduce((total, item) => total + item.value, 0);
  }
}

// ================= Execution Example =================

// Creating items
const book1 = new Book("B1", "Clean Code", 500, "Robert C. Martin");
const cd1 = new CD("C1", "Rock Hits", 300, "Various Artists");
const dvd1 = new DVD("D1", "Inception", 800, "Christopher Nolan");

// Library operations
const myLibrary = new Library();
myLibrary.addItem(book1);
myLibrary.addItem(cd1);
myLibrary.addItem(dvd1);

// Determine total value
console.log("Total Library Value:", myLibrary.calculateTotalValue()); // Output: 1600

// Calculate late fees using dedicated calculator
const feeCalculator = new LateFeeCalculator();
const lateReturns = [
  { item: book1, daysLate: 3 }, // 3 * 10 = 30
  { item: cd1, daysLate: 2 },   // 2 * 20 = 40
  { item: dvd1, daysLate: 1 }   // 1 * 30 = 30
];

console.log("Total Late Fee:", feeCalculator.calculateTotalLateFee(lateReturns)); // Output: 100