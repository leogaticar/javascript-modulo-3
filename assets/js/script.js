// Ejercicio 1

const example = function(a, b, c) {
    return a + b + c;
};

// Ejercicio 2

let suma = (a, b) => a + b;


// Ejercicio 3

function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

pintar(ele);

ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});
