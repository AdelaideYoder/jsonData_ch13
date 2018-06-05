// //_____________________STARTING CHAPTER 13_________________________________

// // Define the database as an object
// const HomeInventoryDatabase = {}
// // Define the arrays (a.k.a. tables) in the database to store each type of items
// HomeInventoryDatabase.furniture = []
// HomeInventoryDatabase.crafts = []
// HomeInventoryDatabase.electronics = []

// // console.log("home inventory database", HomeInventoryDatabase)

// // The ink well is a craft data item
// const vintageInkwell = {
//     name: "Vintage Ink Well",
//     location: "Writing desk",
//     description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
//   }
  
//   // The writing desk is a furniture data item
//   const writingDesk = {
//     name: "Shaker Writing Desk",
//     location: "Bedroom",
//     description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
//   }

//     HomeInventoryDatabase.crafts.push(vintageInkwell)
//     HomeInventoryDatabase.furniture.push(writingDesk)

//     console.log("home inventory database", HomeInventoryDatabase)

//     //we've structured how our data is going to be set up

// //___________________________PART TWO____________________________________________

//     const saveDatabase = function (databaseObject, localStorageKey) {
//         /*
//             Convert the Object into a string.
//         */
//         const stringifiedDatabase = JSON.stringify(databaseObject)

//         console.log("json db:", stringifiedDatabase)
    
//         /*
//             Create a key in local storage, and store the string
//             version of your inventory database as the value
//         */
//         localStorage.setItem(localStorageKey, stringifiedDatabase)
//     }
// // .setItem needs a string
// saveDatabase(HomeInventoryDatabase, "HomeInventoryDatabase")

// //1. convert to json
// //2. give it a key so that when you store it, you can get it back (we put this in a function so that we can call it)

// //take javascript to json
// JSON.stringify

// //json to javascript
// return JSON.parse(databaseString)



//__________________________STARTING PRACTICE NOW__________________________________________
//__________________________HOME INVENTORY________________________________________________

// You will create a database of unique, or cool, items in your home, their location, and why they are special. 

// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.books = []
HomeInventoryDatabase.movies = []
HomeInventoryDatabase.cds = []

// The "As You Wish" is a book data item
const asYouWishBook = {
    name: "As You Wish",
    location: "Bookshelf",
    description: "The book Cary Elwes wrote to document his experience filming The Princess Bride Movie."
  }
  
  // The Princess Bride is a movie data item
  const princessBrideMovie = {
    name: "The Princess Bride",
    location: "Movie Cabinet",
    description: "The movie The Princess Bride."
  }

  const celticThunderCD = {
      name: "Celtic Thunder",
      location: "CD case",
      description: "Celtic Music"
  }

  const redMovie = {
      name: "R.E.D.",
      location: "Movie Cabinet",
      description: "Retired, Extremely Dangerous"
  }

  const sheAndHimCD = {
    name: "She and Him",
    location: "CD case",
    description: "Songs by She and Him"
}

const daveRamseyBook = {
    name: "Financial Peace",
    location: "Bookshelf",
    description: "Book about how to manage your financies"
}

const bothSidesOfTimeBook = {
    name: "Both Sides Of Time",
    location: "Bookshelf",
    description: "Book about time travel"
}

const theIllusionistMovie = {
    name: "The Illusionist",
    location: "Movie Cabinet",
    description: "Great movie with Edward Norton"
}

const theItalianJobMovie = {
    name: "The Italian Job",
    location: "Movie Cabinet",
    description: "Awesome heist movie"
}

const theCountOfMonteCristoMovie = {
    name: "The Count of Monte Cristo",
    location: "Movie Cabinet",
    description: "Amazing movie about setbacks and triumph"
}

HomeInventoryDatabase.books.push(asYouWishBook, daveRamseyBook, bothSidesOfTimeBook)
HomeInventoryDatabase.movies.push(theCountOfMonteCristoMovie, princessBrideMovie, redMovie,theIllusionistMovie, theItalianJobMovie)
HomeInventoryDatabase.cds.push(celticThunderCD, sheAndHimCD)

console.log("this is my object", HomeInventoryDatabase);

// //___________________WRITE A FUNCTION____________JAVASCRIPT TO JSON__________

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

// //___________________WRITE A FUNCTION____________JSON TO JAVASCRIPT__________

// const loadDatabase = function (localStorageKey) {
//     // Get the string version of the database
//     const databaseString = localStorage.getItem(localStorageKey)

//     // Use JSON.parse() to convert the string back into an object
//     return JSON.parse(databaseString)
// }

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")