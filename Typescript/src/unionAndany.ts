let subs: number | string = "1M"; // unio

let apiRequest: "pending" | "success" | "error" = "pending";

// apiRequest = "done" =>  error
// apiRequest = "ok" =>  error
apiRequest = "success";

let airLineSeat: "aisle" | "middle" | "window" = "window";
airLineSeat = "aisle";

const orders = ["12", "20", "27", "45"];

let currentOrder: string | undefined; // any type

for (let order of orders) {
  if (order === "27") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}

console.log(currentOrder);
