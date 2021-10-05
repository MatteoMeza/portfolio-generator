// .map() example
// const animalArr = ['Dogs', 'Cats', 'Horses', 'Birds'];

// const coolAnimalArr = animalArr.map(animal => {
//     console.log(animal);
//     return `${animal} are really cool animals.`;
// });
// console.log(coolAnimalArr);

// .filter() example
const ageArr = [21, 58, 8, 16, 106, 83, 42, 2, 0];

const over21Arr = ageArr.filter(age => {
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
});
// => [21, 58, 106, 83, 42];

// In this example, we have an array of ages. We want to see which ones are
// over the age of 21, so we use a.filter() method to test each age one
// at a time. If it's 21 or older, we return true, meaning that element of
// ageArr should be included in the new over21Arr. If it's younger than 21,
// we return false, meaning that element of the array shouldn't be included
// in the new over21Arr.

