// Pseudo-code for the Browser's Timer API
const internalTimerRegistry = [];

function setTimeoutPolyfill(callback, delay) {
  const id = generateUniqueId();
  const startTime = Date.now();
  
  // 1. Register the timer in the Browser environment (not the JS thread)
  internalTimerRegistry.push({
    id,
    callback,
    executionTime: startTime + delay
  });

  // 2. The Browser's background thread constantly checks this registry.
  // When 'executionTime' <= Date.now():
  // It pushes the callback to the Task Queue.
  
  return id; 
}

function setIntervalPolyfill(callback, delay) {
  const wrapper = () => {
    callback();
    // After execution, schedule the next run
    setTimeout(wrapper, delay); 
  };

  // Kick off the first one
  return setTimeout(wrapper, delay);
}

class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.onSuccessCallbacks = [];

    const resolve = (val) => {
      if (this.state !== 'pending') return;
      
      this.state = 'fulfilled';
      this.value = val;

      // Wrap in microtask to ensure it's asynchronous
      queueMicrotask(() => {
        this.onSuccessCallbacks.forEach(fn => fn(this.value));
      });
    };

    try {
      executor(resolve);
    } catch (err) {
      // Internal rejection logic would go here
    }
  }

  then(callback) {
    // If already resolved, run immediately (as a microtask)
    if (this.state === 'fulfilled') {
      queueMicrotask(() => callback(this.value));
    } else {
      this.onSuccessCallbacks.push(callback);
    }
    return this; // Allows chaining
  }
}


// This is how the engine "unrolls" an async function
function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments);

    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult;
        try {
          generatorResult = gen[key](arg); // Calling .next()
        } catch (error) {
          return reject(error);
        }

        const { value, done } = generatorResult;

        if (done) {
          return resolve(value);
        } else {
          // If not done, wrap the yielded value in a promise 
          // and wait for it to call 'step' again
          return Promise.resolve(value).then(
            val => step("next", val),
            err => step("throw", err)
          );
        }
      }

      step("next");
    });
  };
}

console.log("Start");

const weatherPromise = new MyPromise((resolve) => {
  // Simulating an internal state change
  resolve("Sunny"); 
});

weatherPromise.then((data) => {
  console.log("The weather is:", data);
});

console.log("End");

// Output:
// Start
// End
// The weather is: Sunny 
// (Even though resolve was immediate, it waited for the stack to clear!)

// A "Generator" version of an async function
function* fetchSequence() {
  const user = yield Promise.resolve({ name: "Dev" });
  console.log("User fetched:", user.name);
  
  const settings = yield Promise.resolve({ theme: "dark" });
  console.log("Settings fetched:", settings.theme);
}

// Wrapping it in our internal runner logic
const runDataFetch = asyncToGenerator(fetchSequence);

runDataFetch(); 
// Under the hood: 
// 1. Calls .next() 
// 2. Gets the User promise 
// 3. Waits (.then) 
// 4. Calls .next(userData) to resume...

// console.log("1: Synchronous");

// setTimeout(() => {
//   console.log("2: Timeout (Macrotask Queue)");
// }, 0);

// MyPromise.resolve().then(() => {
//   console.log("3: Promise (Microtask Queue)");
// });

// console.log("4: Synchronous");

/* INTERNAL EXECUTION ORDER:
  1. Log "1" (Stack)
  2. setTimeout goes to Web API (Timer)
  3. Promise.then goes to Microtask Queue
  4. Log "4" (Stack)
  5. Stack is empty -> Run all Microtasks -> Log "3"
  6. Event Loop check -> Task Queue has items -> Log "2"
*/