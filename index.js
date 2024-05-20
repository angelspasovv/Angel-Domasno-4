// Задача 1.

//Да се искористи методот forEach() за итерирање низ низата книги и испечатете го насловот и авторот на секоја книга во конзолата.

books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
]

books.forEach((book) => console.log(book.title, book.author))

//Да се искористи методот find() за да се најде првата книга издадена после 2000та година.

let firstBookAfter2000s = books.find((num) => num.year > 2000)
console.log("The first book after 2000s is: ", firstBookAfter2000s)

// Задача 2.

//Даден е следниот објект:
person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
}

// а. Да се креира уште еден објект кој што ќе се вика additionalInfo 

additionalInfo = {
  email: "john.doe@hotmail.com",
  phone: "+44 117 2345678",
  education: {
    degree: "Masters degree of Criminal Law",
    major: "College Professor"
  }

}

// Oткако ќе го креирате овој објект, на крај употребете го spread операторот за да ги споите двата објекти во еден. Да се испечати 
// резултатот во конзола.

let mergedInfo = { ...person, ...additionalInfo }
console.log(mergedInfo)


// б. За следниот даден објект:

user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
}

// Да се употреби деструктурирање(destructuring) за да се извлечат следниве информации од објектот во променливи:

// Својството username
// Својствата firstName and lastName од fullName
// Својството email од contact
// home address (првиот елемент од addresses низата) во променливи: homeStreet, homeCity, homeState и homeZip.
// work address (вториот елемент од addresses низата) во променливи: workStreet, workCity, workState и workZip.
// На крај, да се испечатат вредностите на променливите во конзола.

let { username, fullName: { firstName, lastName }, contact: { email }, addresses } = user

console.log("Username:", username);
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Email:", email);

let [homeAdress, workAdress] = addresses
let [{ street: homeStreet, city: homeCity, state: homeState, zip: homeZip }] = addresses
let [{ street: workStreet, city: workCity, state: workState, zip: workZip }] = addresses

console.log("Home Address:", homeStreet, homeCity, homeState, homeZip)
console.log("Work Address:", workStreet, workCity, workState, workZip)

// Задача 3.
// За следнава низа од држави:

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]

//а. Испечатете ги сите земји што имаат „land“ во своето име и направете ги со големи букви.

let countriesWithLandInTheirName = countries.filter((land) => land.includes("land")).map((land) => land.toUpperCase())
console.log(countriesWithLandInTheirName)

// б. Испечатете ги сите земји што завршуваат со 'ia' и нивното име е поголемо од 7 букви.

let countriesEndingWithIaAndLongerThanSevenLetters = countries.filter((ia) => ia.endsWith("ia") && ia.length > 7)
console.log(countriesEndingWithIaAndLongerThanSevenLetters)


// Задача 4.

// Во продолжение е дадена следнава низа од објекти:

let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
]

// Да се најдат решенија на барањата подолу:


// а. испечатете ги имињата на животните кои имаат популарност поголема од 4

// б. отпечатете го името на најстариот слон

// в. испечатете ги сите имиња на пингвини кои се помали од 10 години и се женки

// г. најдете ја групата животни чие име има најмногу букви и потоа испечатете го збирот на возраста на жителите

// д. најдете која група на животни има најмал број жители и најголем број жители, потоа направете нова низа која ги содржи сите имиња на жителите

let popularityGreaterThanFour = zooAnimals.filter((animal) => animal.popularity > 4).map((animal) => animal.name)
console.log(popularityGreaterThanFour)

let oldestElephant = zooAnimals.filter((animal) => animal.name === "elephants").flatMap((elephants) => elephants.residents).reduce((accumulator, currentAge) => (currentAge.age > accumulator.age ? currentAge : accumulator))
console.log("The oldest elephant is", oldestElephant.name)

let allFemalePenguinsYoungerThanTen = zooAnimals.filter((animal) => animal.name === "penguins").flatMap((penguins) => penguins.residents).filter((penguin) => penguin.age < 10 && penguin.sex === "female").map((penguin) => penguin.name)
console.log("Female penguins younger than 10 are:", allFemalePenguinsYoungerThanTen)

let groupOfAnimalsWithLongestName = zooAnimals.reduce((accumulator, currentName) => (currentName.name.length > accumulator.name.length ? currentName : accumulator))
let sumOfAges = groupOfAnimalsWithLongestName.residents.reduce((sum, resident) => sum + resident.age, 0)
console.log("The group of animals that has the longest name is:", groupOfAnimalsWithLongestName.name, ", and their ages combined give the sum of:", sumOfAges)

let groupofAnimalsWithSmallestAmountOfInhabitants = zooAnimals.sort((a, b) => a.residents.length - b.residents.length)[0]
console.log("The smallest group of animals is tigers", groupofAnimalsWithSmallestAmountOfInhabitants.residents)

let groupOfAnimalsWithLargestAmountOfInhabitants = zooAnimals.sort((a, b) => b.residents.length - a.residents.length)[0]
console.log("The largest group of animals is the giraffes", groupOfAnimalsWithLargestAmountOfInhabitants.residents)

let arrayOfBothSmallestAndLargestGroupsCombined = groupofAnimalsWithSmallestAmountOfInhabitants.residents.concat(groupOfAnimalsWithLargestAmountOfInhabitants.residents)
console.log("All of the inhabitants in the groups of tigers and giraffes, combined, by name are:", arrayOfBothSmallestAndLargestGroupsCombined)

//Задача 5.

// Напишете функција наречена checkGrade која зема нумеричка оценка како аргумент и враќа соодветна оценка за букви. Оценките на буквите треба 
// да се засноваат на следната скала:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

function checkGrade(points) {
  return points >= 90 ? "A" :
    points >= 80 ? "B" :
      points >= 70 ? "C" :
        points >= 60 ? "D" : "F"
}

console.log("Your grade is:", checkGrade(90))
console.log("Your grade is:", checkGrade(89))
console.log("Your grade is:", checkGrade(71))
console.log("Your grade is:", checkGrade(60))
console.log("Your grade is:", checkGrade(2))
