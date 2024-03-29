const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = require("graphql");

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

// 官方示例
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

// 自定义test
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    ID: { type: GraphQLString },
    USERNAME: { type: GraphQLString },
  })
});

exports.launch = {
  type: LaunchType,
  args: {
    flight_number: { type: GraphQLInt }
  },
  resolve(parent, args) {
    return axios
      .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
      .then(res => res.data);
  }
}

exports.user = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return axios
      .get(`http://localhost:3009/user`)
      .then(res => res.data.data);
  }
}