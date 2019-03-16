const events = require("./events.json");

module.exports = {
  typeDefs: `
  type Query {
    events: [Event]
  }

  type Event {
    id: ID!
    title: String!
    description: String
    language: LanguageCode!
    startsAt: String
    tags: [String]
    streaming: EventStreaming!
    collaboration: EventCollaboration
    isFeatured: Boolean
  }

  enum LanguageCode {
    DE

    EN

    ES

    FR

    RU
  }

  enum EventStreamingPlatform {
    TWITCH

    YOUTUBE

    OTHER
  }

  enum EventCollaborationPlatform {
    ZOOM

    SKYPE

    HANGOUT

    OTHER
  }

  type EventStreaming {
    platform: EventStreamingPlatform
    link: String
  }

  type EventCollaboration {
    platform: EventCollaborationPlatform
    link: String
  }

  extend type User {
    events: [Event]
  }
`,
  resolvers: {
    Query: {
      events: (parent, args, context, info) => {
        return deepCopy(events);
      }
    },
    User: {
      events: (parent, args, context, info) => {
        return deepCopy(events).filter(x => x.userIds.includes(parent.id));
      }
    }
  }
};

function deepCopy(input) {
  return JSON.parse(JSON.stringify(input));
}
