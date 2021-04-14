import Express from 'express'
import BodyParser from 'body-parser'

export const startServer = async () => {
  const app: Express.Application = Express()
  app.use(BodyParser())

  const host: string = process.env.HOST || '0.0.0.0'
  const port: string = process.env.PORT || '3000'

  app.get('/', async (req, res) => {
    res.send({ Hello: 'World!' })
  })

  app.get('/resource1', async (req, res) => {
    res.send({ Test: 'Resource' })
  })

  app.get('/query', async (req, res) => {
    res.send({ query: req.query.foo })
  })

  app.get('/error', async (req, res) => {
    res.sendStatus(403)
  })

  app.get('/:param1', async (req, res) => {
    res.send({ parameter: req.params.param1 })
  })

  app.get('/:param1/:param2', async (req, res) => {
    res.send({ parameter: req.params.param1, param2: req.params.param2 })
  })

  app.post('/post', async (req, res) => {
    console.log(req.body)
    res.send({ test: 'post' })
  })

  app.listen(parseInt(port), host, () => {
    console.log(`Server listening at ${host}:${port}`)
  })
}
