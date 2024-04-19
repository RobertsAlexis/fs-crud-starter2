const express = require('express');

const team_crudRouter = require('./routes/team_crud.router.js');

const PORT = 3001;

const app = express();

app.use(express.json())
app.use(express.static('server/public'));
app.use('/team_crud', team_crudRouter);

app.listen(PORT, () => {
  console.log(`server is up and running at http://localhost:${PORT}`)
});
