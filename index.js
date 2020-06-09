const express = require('express')
const track = require('novelcovid');
const exhbs = require('express-handlebars')


// you can choose which URL to use, this will not change the behaviour of the API
track.settings({
  baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})




// Express
const app = express()

app.set('view engine', 'hbs')

app.engine('hbs', exhbs({
  extname: 'hbs',
  defaultView: 'home',
  layoutsDir: __dirname + '/views/layouts/'
}))

app.get('/countries', (req, res) => {
  track.countries()
    .then((response) => {
      // console.log(response)
      res.render('home', { info: response })
    })
})



let port = 3000
app.listen(port, () => {
  console.log(`App is listening on Port ${port}`)
})