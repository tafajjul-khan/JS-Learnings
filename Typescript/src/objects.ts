const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};

// {
//     name: string;
//     price: number;
//     isHot: boolean

// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger tea",
  price: 30,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak chai",
  price: 40,
  ingredients: ["ginger", "tea lives"],
};

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", materials: "steel" }; // duck typing

smallCup = bigCup;

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arebia" }; // duck typing

const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "taffu",
  password: "123",
};

// split out data types

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  Item: Item[];
  address: Address;
};

type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<chai>) => {
  console.log("updating chai with", updates);
};

updateChai({ price: 35 });
updateChai({ isHot: false });
updateChai({}); // => add error

type ChaiOrder = {
  name?: string;
  quantity?: Number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "masala chai",
  quantity: 2,
});

type job = {
  role: string;
  experience: string;
  skills: string[];
  resume: string;
};

type BasicJobInfo = Pick<job, "role" | "resume" | "skills">;

const jobinfo: BasicJobInfo = {
  role: "software engineer",
  skills: ["python", "java", "js", "ts", "system design"],
};


type PrivateJob = Omit<job, "Equity">

