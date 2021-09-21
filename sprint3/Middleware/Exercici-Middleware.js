const funcions = require('./functions')


const App = () => {
  const middlewares = []

  const use = fn => middlewares.push(fn)

  const runMiddlewares = index => {
    if(index < middlewares.length){
      middlewares[index].call(null, ()=> runMiddlewares(index + 1))
    }
  }
  const get = () => {
    runMiddlewares(0)
  }
  return {
    get,
    use
  }
}

const app = App()

app.use((next)=>{
  console.log((funcions.suma())**2)
  next()
})
app.use((next)=>{
  console.log((funcions.resta())**3)
  next()
})
app.use((next)=>{
  console.log((funcions.multiplicacio())/2)
  next()
})
app.get()



