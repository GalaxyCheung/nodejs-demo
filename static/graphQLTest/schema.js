const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

// 自定义test
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data);
      }
    },
    user: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return axios
          .get(`http://localhost:3009/user`)
          .then(res => res.data.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});