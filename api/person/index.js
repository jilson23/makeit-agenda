const { Router } = require('express');

const router = Router();

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

router.get('/', (req, res) => {
  res.json(persons);
})

module.exports = router;

// router.get('/api/persons/:id', (req, res) => {
//   const idt = Number(req.params.id)
//   const person = persons.find(pers => pers.id === idt)
//   if(!person){
//       res.status(404).json({number:`Number with id: ${idt} not found`})
//   }else{
//       res.json(person);
//   }
// })

// router.post('/api/persons', (req, res) => {
//   const person = req.body;
//   const valName = persons.find(pers => pers.name === person.name)
//   console.log(valName)
//   if (valName){
//       res.json({ error: 'El nombre es repetido' })
//   }
//   else if(person.name && person.number){
//       person.id = Math.floor(Math.random()*10000)
//       persons.push(person)
//       res.json(person)
//   }
//   else{
//       res.json({ error: 'falta el nombre o el numero' })
//   }
// })



// router.delete('/api/persons/:id', (req, res) => {
//   const idt = Number(req.params.id)
//   const ContactToRemove = persons.find(pers => pers.id === idt)
//   if(!ContactToRemove){
//       res.status(404).json({number:`Number with id: ${idt} not found`})
//   }else{
//       res.status(204).end()
//   }
// })
