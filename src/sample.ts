function add(a: number, b: number) {
  return a + b;
}

const result = add(10, 30);

console.log(result)

function bindName(first: string, last: string) {
  return first + ' ' + last;
}

const fullName = bindName('Mizuki', 'Nagasawa');

console.log(fullName)