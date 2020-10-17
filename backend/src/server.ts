import express from 'express'
import './database/connection' // inciar banco de dados 
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log("servidor iniciado/reiniciado...")
})