const words = ['Environmental', 'Systems', 'Research', 'Institute'];

const maslarga = words.reduce((acc, current) => {
  if (acc.length > current.length) {
    return acc
  } else {
    return current
  }
});

console.log(`La palabra más larga es ${maslarga}`);