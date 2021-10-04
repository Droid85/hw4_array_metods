const users = [

    {
  
      name: 'Bob',
  
      age: 27,
  
      address:{
  
          country:'USA',
  
          city:'LA'
  
      },
  
      marks:[2,3,5,4,2,3,1,5]
  
    },
  
    {
  
      name: 'July',
  
      age: 21,
  
      address:{
  
          country:'Ukraine',
  
          city:'Kiev'
  
      },
  
      marks:[4,4,5,4,3,4,3,5]
  
    },
  
    {
  
      name: 'Monya',
  
      age: 15,
  
      address:{
  
          country:'Ukraine',
  
          city:'Odessa'
  
      },
  
      marks:[5,1,5,1,5,1,5,1]
  
    },
  
    {
  
      name: 'Vsevolod',
  
      age: 19,
  
      address:{
  
          country:'Ukraine',
  
          city:'Lviv'
  
      },
  
      marks:[3,4,5,3,1,2,4,6]
  
    },
  
  ];

let extendedArray = [];
let averageMark = 0;

let isNotAdult = users.filter(item => item.age < 18);

console.log(isNotAdult);

let foreignStudent = users.filter(item => item.address.country !== 'Ukraine');

console.log(foreignStudent);

function getNewArr(arr) {
  let avg = 0;
  extendedArray = arr.map(function(item) {
  (item.age >= 18)?item.isAdult = true:item.isAdult = false;
  for (let el in item.marks) {
    avg += item.marks[el]
  }
  item.averageMark = avg / item.marks.length;
  return item;
  });
  return extendedArray;
}

getNewArr(users);

console.log(extendedArray);

function getAvg(arr) {
  let sum = 0;
  averageMark = arr.map(function(item) {
    sum += item.averageMark;
  });
  return sum / arr.length;
}

averageMark = getAvg(users);

console.log(`Total average mark is: ${averageMark}`);

function getAddress(arr) {
  return arr.reduce((place, {address}) => {
    place.countries.push(address.country);
    place.citys.push(address.city);
    return place;
  }, { countries: [], citys: [] }
  );
}

let adresses = getAddress(users);

console.log(adresses);
