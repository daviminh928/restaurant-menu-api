# Restaurant Menu API

## Overview

This is a **GraphQL API** built with **Node.js** and **Express** to serve data for a restaurant menu application. It supports querying different categories of menu items, such as appetizers, entrees, soups, salads, and more. The API uses a structured JSON file (`menu.json`) as the data source.

The API includes special handling for:
- Mixed price structures (e.g., flat prices and combo prices).
- Nested data types like combo pricing for soups and salads.

---

## Features

- Fetch menu items by category (appetizers, entrees, soups and salads, etc.).
- Supports both flat and complex price structures.
- Fully tested with **Jest** and **Supertest**.
- Easy to extend with additional menu categories or functionality.

---

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

---

## Getting Started

### Step 1: Clone the Repository
Clone the repository and navigate to the project directory:
```bash
git clone <repository_url>
cd restaurant-menu-api
```
### Step 2: Install Dependencies
To install the required dependencies, run:
```bash
npm install
```
This will install packages such as:
- express: For creating the web server.
- graphql: The core GraphQL library.
- express-graphql: Middleware for running GraphQL APIs in Express.
- jest and supertest: For automated testing.
### Step 3: Start the Server
To start the API server locally, run:
```bash
npm start
```
By default, the server will run at:
```bash
http://localhost:4000/graphql
```
You can access the API via a browser, Postman, or the built-in GraphiQL interface.

---

## Usage
### Accessing the API with GraphiQL
1.Open your browser and navigate to:
```bash
http://localhost:4000/graphql
```
2.Use the GraphiQL interface to write and execute queries. For example:
Example Query
```bash
query {
  soupsAndSalads {
    name
    price
    comboPrice {
      with_small_green_salad
      with_half_pasta
    }
  }
}
```

---

## Running Tests
### Run Tests
Run the following command to execute automated tests:
```bash
npm test
```
### Test Coverage
The tests validate:
- Data retrieval for each menu category.
- Handling of flat and complex price structures (e.g., soupsAndSalads).0
- Proper error handling for invalid queries.

---

## Notes on Implementation
1.Data Source (menu.json):
- The menu data is stored in a structured JSON file for simplicity and ease of updates.
- Categories like soupsAndSalads have mixed price structures, which are handled with custom schema types and resolvers.
2.GraphQL Schema:
- Includes custom types like ComboPrice to handle nested pricing structures.
- Flexible design allows easy addition of new categories and fields.
3.Resolvers:
- Maps schema queries directly to data from menu.json.
- Custom logic is implemented to handle mixed price structures (e.g., soupsAndSalads).
4.Testing:
- Automated tests use Jest and Supertest to validate the API endpoints and data structures.

---

## Dependencies
- express: Web framework for Node.js.
- express-graphql: Middleware for running GraphQL APIs.
- graphql: Core GraphQL library.
- jest: Testing framework for automated tests.
- supertest: HTTP assertion library for API testing.

---

## Folder Structure
```bash
restaurant-menu-api/
├── src/
│   ├── index.js           # Main server file
│   ├── schema.js          # GraphQL schema definitions
│   ├── resolvers.js       # Resolvers to fetch data
├── data/
│   ├── menu.json          # Menu data source
├── tests/
│   ├── menu.test.js       # Automated tests
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
```

---

## Future Improvements
- Add user authentication to restrict access to certain menu categories.
- Implement mutations to allow dynamic updates to menu data.
- Connect to a database (e.g., MongoDB or PostgreSQL) for persistent data storage.

Feel free to reach out if you have any questions or suggestions! 😊
```bash
You can copy this and save it as `README.md` in your project directory. Let me know if you need any further adjustments!
```
