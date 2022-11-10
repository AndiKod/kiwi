const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
// Templates
const exphbs = require('express-handlebars');
// Models
//const User = require('./models/User');



const app = express();





// app.use(express.json());

// // --- API Routes --- //
// // CRATE user
// app.post('/api/users', async (req, res) => {
//   await User.create(req.body);
//   res.send("success");
// })
// // GET all users
// app.get('/api/users', async (req, res) => {
//   const users = await User.findAll();

//   res.send(users);
// })
// // GET one user
// app.get('/api/users/:id', async (req, res) => {
//   const id = req.params.id;
//   const user = await User.findOne({where: {id: id}});
//   res.send(user);
// })
// // UPDATE one user
// app.put('/api/users/:id', async (req, res) => {
//   const id = req.params.id;
//   const user = await User.findOne({where: {id: id}});
//   user.username = req.body.username;
//   await user.save();
//   res.send('updated');
// })
// // DELETE one user
// app.delete('/api/users/:id', async (req, res) => {
//   const id = req.params.id;
//   await User.destroy({where: {id: id}});
//   res.send('removed');
// })

// app.get('/', (req, res) => {res.send('<h1>-- Kiwi --</h1>')})


// Body Parser
app.use(express.urlencoded({ extended: false }));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', require('./routes/main'));




// Register Handlebars view engine / use it
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', 
  extname: '.hbs',
  helpers: {
    // Global helpers available from any view
    hello: (saved) => "Hi there, you saved " + saved + " bucks!",
    count: (arr) => arr.length,
  }
}));
app.set('view engine', '.hbs');


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));