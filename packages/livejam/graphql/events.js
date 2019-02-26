const users = [
  {
    id: 1,
    name: "Mike"
  },
  {
    id: 2,
    name: "Sebastian"
  },
  {
    id: 4,
    name: "Thomas"
  },
  {
    id: 3,
    name: "Fabian"
  }
];

const events = [
  {
    id: 1,
    title: "AWS CDK with GatsbyJS",
    description: "tbd",
    startsAt: "Tomorrow, 1 pm",
    link: "https://twitch.tv/skorfmann",
    userIds: [1, 3, 4]
  },
  {
    id: 2,
    title: "GraphQL Session",
    description: "tbd",
    startsAt: "Next week",
    link: "https://youtube.com/foobar",
    userIds: [3, 4]
  }
];

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
      }
    },

    Event: {
      users: (parent, args, context, info) => {
        return parent.userIds.map(id => users.find(x => x.id === id));
      }
    }
  }
};
