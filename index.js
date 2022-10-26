const express = require("express");
const sequelize = require('./database');
const User = require('./User');

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const app = express();
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

app.get('/', (req, res) => {res.send('<h1>-Kiwi-</h1>')})




app.listen(3000, () => {
  console.log("App is running");
});