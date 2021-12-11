const express = require('express')

const expressConfig = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

// para obtener el request.body
app.use(express.json())

expressConfig(app);

app.get('/api/info', (req, res) => {
    const PersonsLength = persons.length
    const today = new Date()
    const send = `<p>Phonebook has info for ${PersonsLength} people </p><p>${today}</p>`
    res.send(send);
})

const PORT = 3001

app.listen(PORT, () =>{
  routes(app)
  console.log(`Listen to port http://localhost:${PORT}/`)
})

