// Clone
function clone(source) {
    return {...source};
}

const original_car = {
    brand: "BMW", 
    model: "Serie 1", 
    year: "2014"
};

const cloned_car = clone(original_car);
console.log(original_car, cloned_car, original_car === cloned_car);


// Merge 
function merge(source, target) {
    return Object.assign(clone(target),source);
}
  
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

console.log(merge(a, b));