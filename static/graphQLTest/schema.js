const {
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");
const {
  launch,
  user
} = require("./dataTypeMap")

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launch,
    user
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});