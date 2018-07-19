const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// //  load the router module in your existing Express server ap
// const profile = require('./profile');

const app = express();

app.use('/favicon.ico', express.static('favicon_package_v0.16/favicon.ico'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // use the router module provided by Express for home page
// // The Router in Express is like a mini Express app (with middleware logic) that can be embedded inside of an Express app.
// app.use('/', profile);

// Here we're setting the views directory to be ./views
// this lets the app know where to find the template files
app.set('views', './views');

// Here we're setting the default engine to be ejs
// note we don't need to require it; express will do that for us.
app.set('view engine', 'ejs');

// Now instead of using res.send we can use
// res.render to send the output of the template by filename
app.get('/', (req, res) => {
  const data = {
    person: {
      firstName: 'Zam',
      lastName: 'Montoya'
    }
  };

  // Notice now the data is the second argument passed to the template render method
  res.render('index', data);
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

app.post('/thanks', (req, res) => {
  res.render('thanks', { contact: req.body });
});

app.listen(8080, () => {
  console.log('listening at http://127.0.0.1:8080');
});
