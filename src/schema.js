const { buildSchema } = require('graphql');

// Define the GraphiQL schema
const schema = buildSchema(`
  # Define the structure of a generic menu item
  type MenuItem {
    name: String
    description: String
    price: Float
    half: Float
    full: Float
  }
  
  # Define the structure of a Price object with multiple price levels
  type Price {
    uno: Float
    dos: Float
    tres: Float
  }

  # Define the structure of an enchilada with a nested Price object
  type Enchilada {
    name: String
    description: String
    price: Price
  }

  # Define the structure for price options in combos
  type ComboPrice {
    with_small_green_salad: Float
    with_half_pasta: Float
  }

  # Define the structure of an soupsAndSalads
  type SoupAndSaladCombo {
    name: String
    price: Float
    comboPrice: ComboPrice
  }

  # Define the available queries and their return types
  type Query {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwichesCold: [MenuItem]
    sandwichesHot: [MenuItem]
    soupsAndSalads: [SoupAndSaladCombo]
    fajitas: [MenuItem]
    tacos: [MenuItem]
    enchiladas: [Enchilada]
  }
`);

module.exports = schema;
