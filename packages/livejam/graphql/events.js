const events = require('./events.json');
const users = require('./users.json');

module.exports = {
  typeDefs: `
  type Query {
    events: [Event]
  }

  type Event {
    id: ID!
    title: String!
    description: String
    startsAt: String
    link: String
    users: [User]
  }

  type User {
    id: ID!
    name: String!
  }
`,
  resolvers: {
    Query: {
      events: (parent, args, context, info) => {
        return events;
      },
    },

    Event: {
      users: (parent, args, context, info) => {
        return parent.userIds.map(id => users.find(x => x.id === id));
      },
    },
  },
};
