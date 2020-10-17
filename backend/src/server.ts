import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    return res.json({ message: "bomdia" })
})

app.listen(3333, () => {
    console.log("servidor iniciado/reiniciado...")
})