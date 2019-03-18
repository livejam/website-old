const { resolve, join } = require("path");
const GitHubSlugger = require("github-slugger");
const slugger = new GitHubSlugger();

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Airtable` && node.table === `JamSessions`) {
    createNodeField({
      node,
      name: `slug`,
      value: join("sessions", slugger.slug(node.data.Name))
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const jamSession = resolve(`src/templates/jam-session.js`);

  const result = await graphql(`
    query allJamSessions {
      allAirtable(filter: { table: { eq: "JamSessions" } }) {
        edges {
          node {
            id
            data {
              ID
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach(error => {
      console.log(error);
    });

    throw new Error();
  }

  result.data.allAirtable.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug, // required, we don't have frontmatter for this page hence separate if()
      component: jamSession,
      context: {
        id: edge.node.data.ID
      }
    });
  });
};
