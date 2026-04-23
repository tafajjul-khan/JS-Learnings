function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} of chai ${type}`);
}

makeChai("Masala", 3);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready");
}

function orderChai(type?: string) {}
function orderCoffee(type: string = "Brew") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
