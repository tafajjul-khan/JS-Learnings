const chaiFlavors: string[] = ["masala", "ginger", "kadak", "blackTea"];

const chaiPrice: number[] = [10, 20, 30, 40];

const rating: Array<number> = [4.5, 5.6, 4.7, 4.8];

type chai = {
  name: string;
  price: number;
};

const menu: chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 25 },
];

const cities: readonly string[] = ["Delhi", "Bhopal"];
// cities.push("BgT")

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let chaiTUple: [string, number];

chaiTUple = ["Masala", 20];

// chaiTUple = (15, "Ginger")

let userInfo: [string, number, boolean?];
userInfo = ["Tffu", 100];
userInfo = ["Tffu", 100, true];

const location: readonly [number, number] = [28.33, 24.66, 25.77];

const chaiItems: [name: string, price: number] = ["masala", 25];

enum Cupsize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = Cupsize.LARGE;

enum status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}

enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making chai ${type}`);
}

makeChai(ChaiType.GINGER);

// makeChai("Masala")

// hetrogenes value => not good practice use one data type enum instead
enum random {
  ID = 1,
  NAME = "chai",
}

const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

let t: [string, number] = ["chai", 10];
t.push("extra");
