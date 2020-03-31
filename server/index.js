const express = require('express')
const users = require('../users.json')

const app = express()
const PORT = 4545

app.get('/api/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/api/users/:id', (req, res) => {
  const user = users.find(e => {
    return e.id === +req.params.id
  })
  if(user){
    res.status(200).send(user)
  } else {
    res.status(400).send('User does not exist')
  }
})

app.listen(PORT, () => console.log(`Docked at port ${PORT}`))