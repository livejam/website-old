const users = require('./users.json');

module.exports = {
  typeDefs: `
  extend type Query {
    users: [User]
  }

  extend type Event {
    users: [User]
  }

  type User {
    id: ID!
    name: String!
  }
`,
  resolvers: {
    Query: {
      users: (parent, args, context, info) => {
        return users;
      },
    },
    Event: {
      users: (parent, args, context, info) => {
        return parent.userIds.map(id => users.find(x => x.id === id));
      },
    },
  },
};
