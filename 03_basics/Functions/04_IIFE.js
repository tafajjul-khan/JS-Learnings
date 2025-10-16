// Imediatly Invoked Function Expression (IIFE)

(function connect() {
    // named IIFE
    console.log('DB CONNECTED');
})();

// do with semicolon for two IIFE

( function connectTwo() {
    console.log('DB CONNECTED');
})();

(  (name)  => {
    // // unnamed IIFE
    console.log(`DB CONNECTED ${name}`);
})('taffu')



