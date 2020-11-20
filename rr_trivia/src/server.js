const express = require('express')
const app = express()
const port = 3700
const path = require('path');




app.use( express.static(__dirname + '/../build'));
// app.get('/api/getQuestions', (req, res) => {
//   res.send(results)
//   console.log(results)
// //   .then((results) => {console.log(results)})
// //   .catch((err) => {throw err})
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})