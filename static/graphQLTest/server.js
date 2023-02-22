const express = require("express");
const graphql = require("express-graphql");
const schema = require("./schema");
const app = express();
app.use("/graphql",graphql.graphqlHTTP({schema, graphiql: true}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));