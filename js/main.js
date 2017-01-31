function howdy(person, message) {
    return person + 'sends ' + message;
}
var message = howdy('Lisa ', 'her best.');
console.log(message);

howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count");
    } if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    return favMovie + 'is a fantastic movie.';
}
var choice = inception('null', 'A Wonderful Life ');
console.log(choice);
