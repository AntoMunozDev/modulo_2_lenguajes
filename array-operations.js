const elements = [1, 2, 3, 4, 5];

// Head
const head = ([first, ...elems] = []) => first;
console.log(head(elements));

// Tail
const tail = ([first, ...elems] = []) => elems;
console.log(tail(elements));

// Init 
const init = elems => elems.slice(0, -1);
console.log(init(elements));

// Last
const last = elems => elems.pop();
console.log(last(elements));

