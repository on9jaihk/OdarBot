const app = express()
app.get('/', (req, res) => {
  setTimeout(() => {
    doSomething()
    res.send('Hello World')
  }, 300)
})
app.listen(3000)