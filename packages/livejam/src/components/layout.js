import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import Header from "./header";
import "./layout.css";
import events from "../../data/events.json";

const typeDefs = `
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
`;

const resolvers = {
  Query: {
    events: (parent, args, context, info) => {
      return events;
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema })
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ApolloProvider client={client}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Mike &amp; Sebastian</footer>
        </div>
      </ApolloProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
