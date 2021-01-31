const csv = require('csvtojson');
const fs = require('fs');



csv()
.fromFile('questions/questions.csv')
.then((questions) => {
  fs.writeFile('questions/questions.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log( "questions array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/hallOfFame.csv')
.then((questions) => {
  fs.writeFile('questions/hallOfFame.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("hallOfFame array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/rebelRappers.csv')
.then((questions) => {
  fs.writeFile('questions/rebelRappers.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("rebelRappers array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/advanced.csv')
.then((questions) => {
  fs.writeFile('questions/advanced.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("levelTwo array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/rrMix.csv')
.then((questions) => {
  fs.writeFile('questions/rrMix.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("rrMix array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/shutUpAndSing.csv')
.then((questions) => {
  fs.writeFile('questions/shutUpAndSing.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("shutUpAndSing array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/mix.csv')
.then((questions) => {
  fs.writeFile('questions/mix.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("mix array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/rebelRockers.csv')
.then((questions) => {
  fs.writeFile('questions/rebelRockers.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("rebel rockers array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/whoStoleTheSoul.csv')
.then((questions) => {
  fs.writeFile('questions/whoStoleTheSoul.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("who stole the soul array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})

csv()
.fromFile('questions/hallOfLame.csv')
.then((questions) => {
  fs.writeFile('questions/hallOfLame.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("hall of lame array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})