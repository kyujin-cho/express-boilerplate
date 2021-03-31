import Express from 'express'

export const startServer = async () => {
  const app = Express()

  const host = process.env.HOST || '0.0.0.0'
  const port = process.env.PORT || '3000'

  app.get('/', async (req, res) => {
    res.send({ Hello: 'World!' })
  })
  app.listen(parseInt(port), host, () => {
    console.log(`Server listening at ${host}:${port}`)
  })
}
