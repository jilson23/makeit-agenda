const express = require('express')
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

// para obtener el request.body
app.use(express.json())

morgan.token('body', req => {
    return JSON.stringify(req.body)
})

const valmorgan = ':method :url :status :res[content-length] - :response-time ms :body';
app.use(morgan(valmorgan));

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

