let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = `{"name": "zero to one"}`;

let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

const inputElements = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase()

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log("Error: ", error);
  }
}

const data: unknown = "taffu with code";
const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log(`redirecting to admin dashbord`);
    return;
  }
  if (role === "user") {
    console.log(`redirecting to user dashbord`);
    return;
  }
  //   role; => never
  role;
}


// function neverReturn():never{
//     while(true){}
// }


