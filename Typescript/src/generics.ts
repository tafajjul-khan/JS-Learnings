function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");

wrapInArray(45);

wrapInArray({ flavor: "Ginger" });

console.log(wrapInArray({ jobs: "swe", skill: "py ts" }));

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "test");
pair("masala", 20);
pair("masala", { flavor: "masala", price: 30 });

interface Box<T> {
  content: T;
}

const NumberBox: Box<number> = { content: 10 };
const Numbercup: Box<string> = { content: "10" };

// generics api request

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
