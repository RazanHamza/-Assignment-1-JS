function createCounter(init) {
    let temp = init;
    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            init = temp;
            return init;
        }
    };
}
const counter = createCounter(8);
console.log(counter.increment());
console.log(counter.reset());     
console.log(counter.decrement());
