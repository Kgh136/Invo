const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000   

app.get('/', (req, res) => {
  res.status(200).send('No Monkey Buisness ok?')
});

app.listen(PORT, console.log('Why are you running?'))