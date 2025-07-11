import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('LALA ECOMMERCE is flying to the moon! 🚀')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
