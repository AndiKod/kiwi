const express = require("express");
const sequelize = require('./config/database');
const User = require('./models/User');

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const app = express();

const cors = require('cors');
app.use(cors({
  origin: "*"
}))


app.use(express.json());

// --- API Routes --- //
// CRATE user
app.post('/api/users', async (req, res) => {
  await User.create(req.body);
  res.send("success");
})
// GET all users
app.get('/api/users', async (req, res) => {
  const users = await User.findAll();

  res.send(users);
})
// GET one user
app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({where: {id: id}});
  res.send(user);
})
// UPDATE one user
app.put('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({where: {id: id}});
  user.username = req.body.username;
  await user.save();
  res.send('updated');
})
// DELETE one user
app.delete('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  await User.destroy({where: {id: id}});
  res.send('removed');
})

app.get('/', (req, res) => {res.send('<h1>-- Kiwi --</h1>')})



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));