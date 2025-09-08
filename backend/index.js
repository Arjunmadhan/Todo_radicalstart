const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const sequelize = require('./data');

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully!');
    app.listen(4000, () => {
      console.log('Server running on http://localhost:4000/graphql');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });


  
