const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB Calls, cryptoGraphy
  setTimeout(() => {
    // console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  //   console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('Async task 2')
    // console.log(resolve)
    resolve();
  }, 1000);
}).then(() => {
  // console.log("Async to resolved")
});

const PromiseThird = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "tafajjulkhan", email: "example@gmail.com" });
  }, 1000);
});

PromiseThird.then(function (user) {
  //   console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "exanmple name", password: "57978" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch((err) => {
    // console.log(err);
  })
  .finally(() => {
    // console.log("Finnaly complete");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "57978" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});

async function conssumePromisefile() {
  try {
    const resoponse = await promiseFive;
    // console.log(resoponse);
  } catch (error) {
    // console.log(error)
  }
}

conssumePromisefile();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resoponse) => {
    return resoponse.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
