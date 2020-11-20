const csv = require('csvtojson');
const fs = require('fs');
let results;

// fs.createReadStream('questions.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     // console.log(results);
//   });

csv()
.fromFile('questions.csv')
.then((questions) => {
  fs.writeFile('questions.json', JSON.stringify(questions, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log(JSON.stringify(questions, null, 4), "JSON array is saved.");
  });
  
}) . catch((err) => {
  console.log(err)
})
// Write JSON array to a file


// export default results;
module.exports =  { results };