// Custom server in case is needed.
// To use it, change scripts in package json!

const express = require('express')
const next = require('next')

const { env, host, port } = require('./config')

const app = next({ dev: env !== 'production' })
const handle = app.getRequestHandler()

void (async () => {
  console.log('> Starting server...')

  await app.prepare()
  const server = express()

  server.get('*', (req, res) => handle(req, res))

  server.listen(port)
  console.log(`> Ready on http://${host}:${port}`)
})()
