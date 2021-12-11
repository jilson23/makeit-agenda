const express = require('express')
const morgan = require('morgan');


const persons = [
    {
        id:1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id:2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id:3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id:4,
        name: 'Mery Poppendick',
        number: '39-23-6423122'
    },
]

const app = express();

// para obtener el request.body
app.use(express.json())

morgan.token('body', req => {
    return JSON.stringify(req.body)
})

const valmorgan = ':method :url :status :res[content-length] - :response-time ms :body';

app.use(morgan(valmorgan));


app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.get('/api/info', (req, res) => {
    const PersonsLength = persons.length
    const today = new Date()
    const send = `<p>Phonebook has info for ${PersonsLength} people </p><p>${today}</p>`
    res.send(send);
})

app.get('/api/persons', (req, res) => {
    res.json(persons);
})

app.get('/api/persons/:id', (req, res) => {
    const idt = Number(req.params.id)
    const person = persons.find(pers => pers.id === idt)
    if(!person){
        res.status(404).json({number:`Number with id: ${idt} not found`})
    }else{
        res.json(person);
    }
})

app.post('/api/persons', (req, res) => {
    const person = req.body;
    const valName = persons.find(pers => pers.name === person.name)
    console.log(valName)
    if (valName){
        res.json({ error: 'El nombre es repetido' })
    }
    else if(person.name && person.number){
        person.id = Math.floor(Math.random()*10000)
        persons.push(person)
        res.json(person)
    }
    else{
        // res.status(204).json({ error: 'falta el nombre o el numero' })
        res.json({ error: 'falta el nombre o el numero' })
    }
})


//eliminar una entrada
app.delete('/api/persons/:id', (req, res) => {
    const idt = Number(req.params.id)
    // const ContactToRemove = persons.filter(pers => pers.id !== idt)
    const ContactToRemove = persons.find(pers => pers.id === idt)
    if(!ContactToRemove){
        res.status(404).json({number:`Number with id: ${idt} not found`})
    }else{
        // res.json(ContactToRemove)
        res.status(204).end()
    }
})

const PORT = 3001

app.listen(PORT, console.log(`Listen to port http://localhost:${PORT}/`))