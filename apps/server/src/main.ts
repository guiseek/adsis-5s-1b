import express, {json} from 'express'
import cors from 'cors'

const server = express()

server.use(cors()).use(json())

server.post('/api/login', (req, res) => {
  const {email, senha} = req.body

  if (email === 'user@email.com' && senha === '123456') {
    return res.status(200).json({message: 'Acesso concedido'})
  }

  return res.status(403).json({message: 'Acesso negado'})
})

server.listen(3000, () => {
  console.log(`Executando em http://localhost:3000`)
})
