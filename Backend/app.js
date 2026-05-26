const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync()
.then(() => {
  console.log('Base de datos conectada');

  app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
  });
})
.catch(err => {
  console.log(err);
});