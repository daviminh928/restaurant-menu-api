const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express(); // Initialize Express application

//define the /graphql endpoint with GraphiQL middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema, // Attach the schema
    rootValue: resolvers, //Attach the resolvers
    graphiql: true, // Enables the GraphiQL interface for testing
  })
);

const PORT = 4000; // Define the server port

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
