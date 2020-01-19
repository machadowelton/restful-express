const app = () => {
  const express = require('express')
  const server = express()
  const compression = require('compression')
  const bodyparser = require('body-parser')
  server.use(compression())
  server.use(bodyparser.urlencoded({ extended: false }))
  server.use(bodyparser.json())
  const port = process.env.PORT || 8000
  server.get('/rest/status', (req, res) => {
    res.json({ mensagem: 'ok' })
  })
  server.listen(port, () => console.log('Server iniciou em: ' + port))
}
app()
