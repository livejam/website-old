const events = require('./events.json');

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
  }

  extend type User {
    events: [Event]
  }
`,
  resolvers: {
    Query: {
      events: (parent, args, context, info) => {
        return events;
      },
    },
    User: {
      events: (parent, args, context, info) => {
        return events.filter(x => x.userIds.includes(parent.id));
      },
    },
  },
};
