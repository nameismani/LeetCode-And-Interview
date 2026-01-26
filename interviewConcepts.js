function memoize(fn, context) {
  const res = {};

  return function (...args) {
    const cachedArguments = JSON.stringify(args);
    if (!res[cachedArguments]) {
      res[cachedArguments] = fn.call(context || this, ...args);
    }
    return res[cachedArguments];
  };
}

const add = (a, b) => {
  console.log("Calculating sum...");
  return a + b;
};

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Output: Calculating sum... 3
console.log(memoizedAdd(1, 2)); // Output: 3 (cached)

function curry(fn, context) {
  return function curried(...args) {
    // If we have enough arguments, call the original function
    if (args.length >= fn.length) {
      return fn.call(context || this, ...args);
    } else {
      // Otherwise, return a function that can accept more arguments
      return function (...next) {
        // Call the curried function with the combined arguments
        return curried(...args, ...next);
      };
    }
  };
}

const add = (a, b) => {
  console.log("Run");
  return a + b;
};

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); // Output: "Run" and 5

function debounce(cb, delay) {
  let timerId; // use a different name for the internal variable
  return function (...args) {
    // Clear the previous timeout
    if (timerId) clearTimeout(timerId);

    // Set a new timeout
    timerId = setTimeout(() => cb(...args), delay);
  };
}

const log = (message) => console.log(message);

const debouncedLog = debounce(log, 1000);

// Call the debounced function multiple times
debouncedLog("Hello");
debouncedLog("Hello again");
debouncedLog("Hello once more");

// Only the last message ('Hello once more') will be logged after 1 second

function throttle(cb, delay) {
  let last = 0;

  return function (...args) {
    const now = new Date().getTime();

    // If the time since the last call is greater than or equal to the delay
    if (now - last >= delay) {
      last = now; // Update last time
      cb(...args); // Invoke the callback with the arguments
    }
  };
}

const log = () => console.log("Throttled!");

const throttledLog = throttle(log, 1000);

// Call the throttled function multiple times
throttledLog(); // Logs: "Throttled!"
throttledLog(); // Does nothing
throttledLog(); // Does nothing

// After 1 second, this will log again
setTimeout(() => throttledLog(), 1000); // Logs: "Throttled!"
