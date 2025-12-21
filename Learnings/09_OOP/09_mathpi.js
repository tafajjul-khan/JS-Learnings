const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor)

// descriptor.writable = true
// console.log(descriptor)

const chai = {
  name: "ginger chai",
  price: 20,
  isAvailable: true,

  orderchai: function () {
    console.log("chaye nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
  // console.log(`${key}: ${value}`);
}
