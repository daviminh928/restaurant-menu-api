const request = require('supertest');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../src/schema');
const resolvers = require('../src/resolvers');

//create a test app with the same setup as the main server
const app = express();
app.use('/graphql', graphqlHTTP({ 
    schema, 
    rootValue: resolvers, 
    graphiql: false // Disable GraphiQL for testing
}));

describe('GraphQL API', () => {
  // Test for enchiladas
  it('fetches enchiladas with all price options', async () => {
    const query = `
      query {
        enchiladas {
          name
          description
          price {
            uno
            dos
            tres
          }
        }
      }
    `;
    const response = await request(app).post('/graphql').send({ query });
    expect(response.status).toBe(200); // HTTP status should be 200
    expect(response.body.data.enchiladas[0].price.uno).toBe(8.5); // Make sure the tres price is returned as 8.5
    expect(response.body.data.enchiladas[0].price.dos).toBe(9.95); // Make sure the dos price is returned as 9.95
    expect(response.body.data.enchiladas[0].price.tres).toBe(11.5); // Make sure the tres price is returned as 11.5
  });
});
