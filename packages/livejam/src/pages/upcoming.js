import React from "react";
import { Link } from "gatsby";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Upcoming = () => (
  <Layout>
    <SEO title="Mike und Sebastian" />
    <Query
      query={gql`
        query allEvents {
          events {
            id
            title
            description
            startsAt
            link
            users {
              id
              name
            }
          }
        }
      `}
    >
      {({ data: { events } }) => (
        <ul>
          {events &&
            events.map(event => (
              <li key={event.id}>
                <h2>{event.title}</h2>
                <p>{event.startsAt}</p>
                <p>{event.users && event.users.map(x => x.name).join(", ")}</p>
                <a href={event.link}>Watch</a>
              </li>
            ))}
        </ul>
      )}
    </Query>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Upcoming;
