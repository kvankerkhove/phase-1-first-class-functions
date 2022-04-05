function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function aNamedFunction() {

    };
}

function returnsAnAnonymousFunction() {
    return function () {};
}

//const returnsANamedFunction = () => receivesAFunction(callback);