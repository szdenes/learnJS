let express = require('express') //invite from node modules
let app = express()
let mongodb = require('mongodb') // invite from node modules
let db //defined below at mongodb connect
let mongoose = require('mongoose')

let connectionString =
  'mongodb+srv://todoappuser:todoappuser@cluster0-to-do.b5gol.mongodb.net/Cluster0-to-do?retryWrites=true&w=majority'

//first param : connection string; second param: mongodb config property, third param: the action in the method
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, client) {
    db = client.db() //this selects our mongodb database
    // app.listen(3000);
  }
)

app.use(express.urlencoded({ extended: false }))

// app.get('/db', (req,res)=>console.log(db.collection('items').find().toArray()))

app.get('/', (req, res) => {
  db.collection('items')
    .find()
    .toArray((err, items) => {
      // console.log(items)
      console.table(items)
      //start html
      res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">To-Do App</h1>
        <h1 class="display-4 text-center py-1">nodemon</h1>
        
        <div class="jumbotron p-3 shadow-sm">
          <form action="/create-item" method="POST">
            <div class="d-flex align-items-center">
              <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Add New Item</button>
            </div>
          </form>
        </div>
        
        <ul class="list-group pb-5">
          ${items.map((azAdat) => {
            return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text"></span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
              <button class="delete-me btn btn-danger btn-sm">Delete</button>
            </div>
          </li>`
          }).join('')}
        </ul>
        
      </div>
      
    </body>
    </html>`)
      //end html
    })

  //html start
})
// end html
console.log('html parsed. congrats.')
console.log('database loaded. congrats.')

app.post('/create-item', (req, res) => {
  // console.log('make this dynamic')
  // console.log(req.body.item)
  db.collection('items').insertOne({ text: req.body.item }, () => {
    res.send('Thanks for submitting.' + '<br> <br><a href="/"> home </a>')
  })
})

//end
app.listen(3000)
