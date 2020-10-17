import express from 'express'

import './database/connection' // inciar banco de dados 

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
    return res.json({ message: "bomdia" })
})

app.listen(3333, () => {
    console.log("servidor iniciado/reiniciado...")
})